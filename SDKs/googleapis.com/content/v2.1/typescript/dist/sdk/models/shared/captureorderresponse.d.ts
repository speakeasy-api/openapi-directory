import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the execution. Only defined if the request was successful. Acceptable values are: * "duplicate" * "executed"
 */
export declare enum CaptureOrderResponseExecutionStatusEnum {
    ExecutionStatusUnspecified = "EXECUTION_STATUS_UNSPECIFIED",
    Executed = "EXECUTED",
    Duplicate = "DUPLICATE"
}
/**
 * Response message for the CaptureOrder method.
 */
export declare class CaptureOrderResponse extends SpeakeasyBase {
    /**
     * The status of the execution. Only defined if the request was successful. Acceptable values are: * "duplicate" * "executed"
     */
    executionStatus?: CaptureOrderResponseExecutionStatusEnum;
}
