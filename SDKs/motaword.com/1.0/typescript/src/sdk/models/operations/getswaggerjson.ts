import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSwaggerJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSwaggerJSON200ApplicationJSONObject?: Record<string, any>;
}
