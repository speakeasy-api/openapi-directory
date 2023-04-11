import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.
 */
export declare enum FailoverPropertyConditionStatusEnum {
    Delivered = "delivered",
    Read = "read"
}
/**
 * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
 */
export declare class FailoverProperty extends SpeakeasyBase {
    /**
     * Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.
     */
    conditionStatus?: FailoverPropertyConditionStatusEnum;
    /**
     * In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).
     */
    expiryTime?: number;
}
