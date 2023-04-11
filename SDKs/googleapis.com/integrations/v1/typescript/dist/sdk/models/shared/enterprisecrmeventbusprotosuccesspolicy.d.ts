import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State to which the execution snapshot status will be set if the task succeeds.
 */
export declare enum EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum {
    Unspecified = "UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}
/**
 * Policy that dictates the behavior for the task after it completes successfully.
 */
export declare class EnterpriseCrmEventbusProtoSuccessPolicy extends SpeakeasyBase {
    /**
     * State to which the execution snapshot status will be set if the task succeeds.
     */
    finalState?: EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
}
