import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Error code.
 */
export declare enum QuotaErrorCodeEnum {
    Unspecified = "UNSPECIFIED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    OutOfRange = "OUT_OF_RANGE",
    BillingNotActive = "BILLING_NOT_ACTIVE",
    ProjectDeleted = "PROJECT_DELETED",
    ApiKeyInvalid = "API_KEY_INVALID",
    ApiKeyExpired = "API_KEY_EXPIRED",
    SpatulaHeaderInvalid = "SPATULA_HEADER_INVALID",
    LoasRoleInvalid = "LOAS_ROLE_INVALID",
    NoLoasProject = "NO_LOAS_PROJECT",
    ProjectStatusUnavailable = "PROJECT_STATUS_UNAVAILABLE",
    ServiceStatusUnavailable = "SERVICE_STATUS_UNAVAILABLE",
    BillingStatusUnavailable = "BILLING_STATUS_UNAVAILABLE",
    QuotaSystemUnavailable = "QUOTA_SYSTEM_UNAVAILABLE"
}
/**
 * Represents error information for QuotaOperation.
 */
export declare class QuotaError extends SpeakeasyBase {
    /**
     * Error code.
     */
    code?: QuotaErrorCodeEnum;
    /**
     * Free-form text that provides details on the cause of the error.
     */
    description?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
    /**
     * Subject to whom this error applies. See the specific enum for more details on this field. For example, "clientip:" or "project:".
     */
    subject?: string;
}
