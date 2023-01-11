import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
export declare enum HeartbeatResponseStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
export declare class HeartbeatResponse extends SpeakeasyBase {
    error?: ErrorT;
    status?: HeartbeatResponseStatusEnum;
    timestamp?: Date;
}
