import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validation result
 */
export declare enum CheckSQSResponseStatusEnum {
    Ok = "ok",
    Error = "error"
}
/**
 * Successful response
 */
export declare class CheckSQSResponse extends SpeakeasyBase {
    /**
     * Error data
     */
    data?: Record<string, any>;
    duration: string;
    /**
     * Error text
     */
    error?: string;
    /**
     * Validation result
     */
    status: CheckSQSResponseStatusEnum;
}
