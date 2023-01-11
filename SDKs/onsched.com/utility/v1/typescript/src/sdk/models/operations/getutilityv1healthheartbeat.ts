import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUtilityV1HealthHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUtilityV1HealthHeartbeat200ApplicationJSONString?: string;
}
