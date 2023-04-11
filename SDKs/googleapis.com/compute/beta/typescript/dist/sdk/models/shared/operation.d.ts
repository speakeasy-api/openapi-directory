import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";
import { Help } from "./help";
import { LocalizedMessage } from "./localizedmessage";
import { QuotaExceededInfo } from "./quotaexceededinfo";
export declare class OperationErrorErrorsErrorDetails extends SpeakeasyBase {
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
export declare class OperationErrorErrors extends SpeakeasyBase {
    /**
     * [Output Only] The error type identifier for this error.
     */
    code?: string;
    /**
     * [Output Only] An optional list of messages that contain the error details. There is a set of defined message types to use for providing details.The syntax depends on the error code. For example, QuotaExceededInfo will have details when the error code is QUOTA_EXCEEDED.
     */
    errorDetails?: OperationErrorErrorsErrorDetails[];
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
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
 */
export declare class OperationError extends SpeakeasyBase {
    /**
     * [Output Only] The array of errors encountered while processing this operation.
     */
    errors?: OperationErrorErrors[];
}
/**
 * [Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.
 */
export declare enum OperationStatusEnum {
    Done = "DONE",
    Pending = "PENDING",
    Running = "RUNNING"
}
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
export declare enum OperationWarningsCodeEnum {
    CleanupFailed = "CLEANUP_FAILED",
    DeprecatedResourceUsed = "DEPRECATED_RESOURCE_USED",
    DeprecatedTypeUsed = "DEPRECATED_TYPE_USED",
    DiskSizeLargerThanImageSize = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE",
    ExperimentalTypeUsed = "EXPERIMENTAL_TYPE_USED",
    ExternalApiWarning = "EXTERNAL_API_WARNING",
    FieldValueOverriden = "FIELD_VALUE_OVERRIDEN",
    InjectedKernelsDeprecated = "INJECTED_KERNELS_DEPRECATED",
    InvalidHealthCheckForDynamicWieghtedLb = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB",
    LargeDeploymentWarning = "LARGE_DEPLOYMENT_WARNING",
    MissingTypeDependency = "MISSING_TYPE_DEPENDENCY",
    NextHopAddressNotAssigned = "NEXT_HOP_ADDRESS_NOT_ASSIGNED",
    NextHopCannotIpForward = "NEXT_HOP_CANNOT_IP_FORWARD",
    NextHopInstanceHasNoIpv6Interface = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE",
    NextHopInstanceNotFound = "NEXT_HOP_INSTANCE_NOT_FOUND",
    NextHopInstanceNotOnNetwork = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK",
    NextHopNotRunning = "NEXT_HOP_NOT_RUNNING",
    NotCriticalError = "NOT_CRITICAL_ERROR",
    NoResultsOnPage = "NO_RESULTS_ON_PAGE",
    PartialSuccess = "PARTIAL_SUCCESS",
    RequiredTosAgreement = "REQUIRED_TOS_AGREEMENT",
    ResourceInUseByOtherResourceWarning = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING",
    ResourceNotDeleted = "RESOURCE_NOT_DELETED",
    SchemaValidationIgnored = "SCHEMA_VALIDATION_IGNORED",
    SingleInstancePropertyTemplate = "SINGLE_INSTANCE_PROPERTY_TEMPLATE",
    UndeclaredProperties = "UNDECLARED_PROPERTIES",
    Unreachable = "UNREACHABLE"
}
export declare class OperationWarningsData extends SpeakeasyBase {
    /**
     * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
     */
    key?: string;
    /**
     * [Output Only] A warning data value corresponding to the key.
     */
    value?: string;
}
export declare class OperationWarnings extends SpeakeasyBase {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    code?: OperationWarningsCodeEnum;
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" }
     */
    data?: OperationWarningsData[];
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    message?: string;
}
/**
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/beta/globalOperations) * [Regional](/compute/docs/reference/rest/beta/regionOperations) * [Zonal](/compute/docs/reference/rest/beta/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
 */
export declare class Operation extends SpeakeasyBase {
    /**
     * [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.
     */
    clientOperationId?: string;
    /**
     * [Deprecated] This field is deprecated.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] A textual description of the operation, which is set when the operation is created.
     */
    description?: string;
    /**
     * [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
     */
    endTime?: string;
    /**
     * [Output Only] If errors are generated during processing of the operation, this field will be populated.
     */
    error?: OperationError;
    /**
     * [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.
     */
    httpErrorMessage?: string;
    /**
     * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.
     */
    httpErrorStatusCode?: number;
    /**
     * [Output Only] The unique identifier for the operation. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
     */
    insertTime?: string;
    /**
     * [Output Only] Type of the resource. Always `compute#operation` for Operation resources.
     */
    kind?: string;
    /**
     * [Output Only] Name of the operation.
     */
    name?: string;
    /**
     * [Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.
     */
    operationGroupId?: string;
    /**
     * [Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.
     */
    operationType?: string;
    /**
     * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
     */
    progress?: number;
    /**
     * [Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
     */
    startTime?: string;
    /**
     * [Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.
     */
    status?: OperationStatusEnum;
    /**
     * [Output Only] An optional textual description of the current status of the operation.
     */
    statusMessage?: string;
    /**
     * [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
     */
    targetId?: string;
    /**
     * [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
     */
    targetLink?: string;
    /**
     * [Output Only] User who requested the operation, for example: `user@example.com`.
     */
    user?: string;
    /**
     * [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
     */
    warnings?: OperationWarnings[];
    /**
     * [Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.
     */
    zone?: string;
}
