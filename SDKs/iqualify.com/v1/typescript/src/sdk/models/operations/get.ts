import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  get200ApplicationJSONObject?: Record<string, any>;
}
