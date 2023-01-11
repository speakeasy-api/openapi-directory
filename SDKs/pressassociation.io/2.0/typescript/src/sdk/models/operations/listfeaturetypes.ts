import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListFeatureTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ListFeatureTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListFeatureTypesSecurity;
}


export class ListFeatureTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listFeatureTypes200ApplicationJSONObject?: Record<string, any>;
}
