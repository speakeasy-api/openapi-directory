import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FailoverPropertyConditionStatusEnum {
    Delivered = "delivered",
    Read = "read"
}
/**
 * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
**/
export declare class FailoverProperty extends SpeakeasyBase {
    conditionStatus?: FailoverPropertyConditionStatusEnum;
    expiryTime?: number;
}
