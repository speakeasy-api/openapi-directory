import { SpeakeasyBase } from "../../../internal/utils";
import { Credential } from "./credential";
import { ResourceAccessControl } from "./resourceaccesscontrol";
export declare class ResourceUpdateErrorErrors extends SpeakeasyBase {
    /**
     * [Output Only] The error type identifier for this error.
     */
    code?: string;
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
 * Output only. If errors are generated during update of the resource, this field will be populated.
 */
export declare class ResourceUpdateError extends SpeakeasyBase {
    /**
     * [Output Only] The array of errors encountered while processing this operation.
     */
    errors?: ResourceUpdateErrorErrors[];
}
/**
 * Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`.
 */
export declare enum ResourceUpdateIntentEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Delete = "DELETE",
    Acquire = "ACQUIRE",
    Update = "UPDATE",
    Abandon = "ABANDON",
    Create = "CREATE"
}
export declare enum ResourceUpdateRuntimePoliciesEnum {
    Create = "CREATE",
    Delete = "DELETE",
    UpdateOnChange = "UPDATE_ON_CHANGE",
    UpdateAlways = "UPDATE_ALWAYS"
}
/**
 * Output only. The state of the resource.
 */
export declare enum ResourceUpdateStateEnum {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    InPreview = "IN_PREVIEW",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
export declare enum ResourceUpdateWarningsCodeEnum {
    DeprecatedResourceUsed = "DEPRECATED_RESOURCE_USED",
    NoResultsOnPage = "NO_RESULTS_ON_PAGE",
    Unreachable = "UNREACHABLE",
    NextHopAddressNotAssigned = "NEXT_HOP_ADDRESS_NOT_ASSIGNED",
    NextHopInstanceNotFound = "NEXT_HOP_INSTANCE_NOT_FOUND",
    NextHopInstanceNotOnNetwork = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK",
    NextHopCannotIpForward = "NEXT_HOP_CANNOT_IP_FORWARD",
    NextHopNotRunning = "NEXT_HOP_NOT_RUNNING",
    InjectedKernelsDeprecated = "INJECTED_KERNELS_DEPRECATED",
    RequiredTosAgreement = "REQUIRED_TOS_AGREEMENT",
    DiskSizeLargerThanImageSize = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE",
    ResourceNotDeleted = "RESOURCE_NOT_DELETED",
    SingleInstancePropertyTemplate = "SINGLE_INSTANCE_PROPERTY_TEMPLATE",
    NotCriticalError = "NOT_CRITICAL_ERROR",
    CleanupFailed = "CLEANUP_FAILED",
    FieldValueOverriden = "FIELD_VALUE_OVERRIDEN",
    ResourceInUseByOtherResourceWarning = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING",
    MissingTypeDependency = "MISSING_TYPE_DEPENDENCY",
    ExternalApiWarning = "EXTERNAL_API_WARNING",
    SchemaValidationIgnored = "SCHEMA_VALIDATION_IGNORED",
    UndeclaredProperties = "UNDECLARED_PROPERTIES",
    ExperimentalTypeUsed = "EXPERIMENTAL_TYPE_USED",
    DeprecatedTypeUsed = "DEPRECATED_TYPE_USED",
    PartialSuccess = "PARTIAL_SUCCESS",
    LargeDeploymentWarning = "LARGE_DEPLOYMENT_WARNING",
    NextHopInstanceHasNoIpv6Interface = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE",
    InvalidHealthCheckForDynamicWieghtedLb = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
}
export declare class ResourceUpdateWarningsData extends SpeakeasyBase {
    /**
     * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
     */
    key?: string;
    /**
     * [Output Only] A warning data value corresponding to the key.
     */
    value?: string;
}
export declare class ResourceUpdateWarnings extends SpeakeasyBase {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    code?: ResourceUpdateWarningsCodeEnum;
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" }
     */
    data?: ResourceUpdateWarningsData[];
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    message?: string;
}
export declare class ResourceUpdate extends SpeakeasyBase {
    /**
     * The access controls set on the resource.
     */
    accessControl?: ResourceAccessControl;
    /**
     * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
     */
    credential?: Credential;
    /**
     * Output only. If errors are generated during update of the resource, this field will be populated.
     */
    error?: ResourceUpdateError;
    /**
     * Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
     */
    finalProperties?: string;
    /**
     * Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`.
     */
    intent?: ResourceUpdateIntentEnum;
    /**
     * Output only. URL of the manifest representing the update configuration of this resource.
     */
    manifest?: string;
    /**
     * Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
     */
    properties?: string;
    /**
     * Output only. In case this is an action, it will show the runtimePolicies that this action will have after updating the deployment.
     */
    runtimePolicies?: ResourceUpdateRuntimePoliciesEnum[];
    /**
     * Output only. The state of the resource.
     */
    state?: ResourceUpdateStateEnum;
    /**
     * Output only. If warning messages are generated during processing of this resource, this field will be populated.
     */
    warnings?: ResourceUpdateWarnings[];
}
