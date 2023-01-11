import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";


export enum HeartbeatResponseStatusEnum {
    Up = "UP",
    Down = "DOWN"
}


export class HeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: HeartbeatResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
