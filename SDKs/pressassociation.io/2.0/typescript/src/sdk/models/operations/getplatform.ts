import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlatformPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformId" })
  platformId: string;
}


export class GetPlatformSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetPlatformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlatformPathParams;

  @SpeakeasyMetadata()
  security: GetPlatformSecurity;
}


export class GetPlatformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPlatform200ApplicationJSONObject?: Record<string, any>;
}
