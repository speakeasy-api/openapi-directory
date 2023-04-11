import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
export declare enum HeartbeatResponseStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * OK
 */
export declare class HeartbeatResponse extends SpeakeasyBase {
    error?: ErrorT;
    status: HeartbeatResponseStatusEnum;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
