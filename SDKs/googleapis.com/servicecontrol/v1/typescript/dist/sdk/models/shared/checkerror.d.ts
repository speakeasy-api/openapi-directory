import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * The error code.
 */
export declare enum CheckErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    PermissionDenied = "PERMISSION_DENIED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    BudgetExceeded = "BUDGET_EXCEEDED",
    DenialOfServiceDetected = "DENIAL_OF_SERVICE_DETECTED",
    LoadShedding = "LOAD_SHEDDING",
    AbuserDetected = "ABUSER_DETECTED",
    ServiceNotActivated = "SERVICE_NOT_ACTIVATED",
    VisibilityDenied = "VISIBILITY_DENIED",
    BillingDisabled = "BILLING_DISABLED",
    ProjectDeleted = "PROJECT_DELETED",
    ProjectInvalid = "PROJECT_INVALID",
    ConsumerInvalid = "CONSUMER_INVALID",
    IpAddressBlocked = "IP_ADDRESS_BLOCKED",
    RefererBlocked = "REFERER_BLOCKED",
    ClientAppBlocked = "CLIENT_APP_BLOCKED",
    ApiTargetBlocked = "API_TARGET_BLOCKED",
    ApiKeyInvalid = "API_KEY_INVALID",
    ApiKeyExpired = "API_KEY_EXPIRED",
    ApiKeyNotFound = "API_KEY_NOT_FOUND",
    SpatulaHeaderInvalid = "SPATULA_HEADER_INVALID",
    LoasRoleInvalid = "LOAS_ROLE_INVALID",
    NoLoasProject = "NO_LOAS_PROJECT",
    LoasProjectDisabled = "LOAS_PROJECT_DISABLED",
    SecurityPolicyViolated = "SECURITY_POLICY_VIOLATED",
    InvalidCredential = "INVALID_CREDENTIAL",
    LocationPolicyViolated = "LOCATION_POLICY_VIOLATED",
    NamespaceLookupUnavailable = "NAMESPACE_LOOKUP_UNAVAILABLE",
    ServiceStatusUnavailable = "SERVICE_STATUS_UNAVAILABLE",
    BillingStatusUnavailable = "BILLING_STATUS_UNAVAILABLE",
    QuotaCheckUnavailable = "QUOTA_CHECK_UNAVAILABLE",
    LoasProjectLookupUnavailable = "LOAS_PROJECT_LOOKUP_UNAVAILABLE",
    CloudResourceManagerBackendUnavailable = "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE",
    SecurityPolicyBackendUnavailable = "SECURITY_POLICY_BACKEND_UNAVAILABLE",
    LocationPolicyBackendUnavailable = "LOCATION_POLICY_BACKEND_UNAVAILABLE",
    InjectedError = "INJECTED_ERROR"
}
/**
 * Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.
 */
export declare class CheckError extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: CheckErrorCodeEnum;
    /**
     * Free-form text providing details on the error cause of the error.
     */
    detail?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: Status;
    /**
     * Subject to whom this error applies. See the specific code enum for more details on this field. For example: - "project:" - "folder:" - "organization:"
     */
    subject?: string;
}
