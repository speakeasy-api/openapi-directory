import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFormatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFormats200ApplicationJSONObject?: Record<string, any>;
}
