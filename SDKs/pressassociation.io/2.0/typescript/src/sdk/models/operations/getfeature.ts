import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeaturePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=featureId" })
  featureId: string;
}


export class GetFeatureSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFeatureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturePathParams;

  @SpeakeasyMetadata()
  security: GetFeatureSecurity;
}


export class GetFeatureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFeature200ApplicationJSONObject?: Record<string, any>;
}
