import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeWindow extends SpeakeasyBase {
    /**
     * Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start.
     */
    earliest?: number;
    /**
     * Specifies the closing time of the time window in seconds, i.e. the latest time the service can start.
     */
    latest?: number;
}
