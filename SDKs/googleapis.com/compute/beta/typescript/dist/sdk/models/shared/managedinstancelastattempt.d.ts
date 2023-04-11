import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";
import { Help } from "./help";
import { LocalizedMessage } from "./localizedmessage";
import { QuotaExceededInfo } from "./quotaexceededinfo";
export declare class ManagedInstanceLastAttemptErrorsErrorsErrorDetails extends SpeakeasyBase {
    /**
     * Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" } } This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" } }
     */
    errorInfo?: ErrorInfo;
    /**
     * Provides links to documentation or for performing an out of band action. For example, if a quota check failed with an error indicating the calling project hasn't enabled the accessed service, this can contain a URL pointing directly to the right place in the developer console to flip the bit.
     */
    help?: Help;
    /**
     * Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
     */
    localizedMessage?: LocalizedMessage;
    /**
     * Additional details for quota exceeded error for resource quota.
     */
    quotaInfo?: QuotaExceededInfo;
}
export declare class ManagedInstanceLastAttemptErrorsErrors extends SpeakeasyBase {
    /**
     * [Output Only] The error type identifier for this error.
     */
    code?: string;
    /**
     * [Output Only] An optional list of messages that contain the error details. There is a set of defined message types to use for providing details.The syntax depends on the error code. For example, QuotaExceededInfo will have details when the error code is QUOTA_EXCEEDED.
     */
    errorDetails?: ManagedInstanceLastAttemptErrorsErrorsErrorDetails[];
    /**
     * [Output Only] Indicates the field in the request that caused the error. This property is optional.
     */
    location?: string;
    /**
     * [Output Only] An optional, human-readable error message.
     */
    message?: string;
}
/**
 * [Output Only] Encountered errors during the last attempt to create or delete the instance.
 */
export declare class ManagedInstanceLastAttemptErrors extends SpeakeasyBase {
    /**
     * [Output Only] The array of errors encountered while processing this operation.
     */
    errors?: ManagedInstanceLastAttemptErrorsErrors[];
}
export declare class ManagedInstanceLastAttempt extends SpeakeasyBase {
    /**
     * [Output Only] Encountered errors during the last attempt to create or delete the instance.
     */
    errors?: ManagedInstanceLastAttemptErrors;
}
