import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpointGroup } from "./networkendpointgroup";
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
export declare enum NetworkEndpointGroupsScopedListWarningCodeEnum {
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
export declare class NetworkEndpointGroupsScopedListWarningData extends SpeakeasyBase {
    /**
     * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
     */
    key?: string;
    /**
     * [Output Only] A warning data value corresponding to the key.
     */
    value?: string;
}
/**
 * [Output Only] An informational warning that replaces the list of network endpoint groups when the list is empty.
 */
export declare class NetworkEndpointGroupsScopedListWarning extends SpeakeasyBase {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    code?: NetworkEndpointGroupsScopedListWarningCodeEnum;
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" }
     */
    data?: NetworkEndpointGroupsScopedListWarningData[];
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    message?: string;
}
export declare class NetworkEndpointGroupsScopedList extends SpeakeasyBase {
    /**
     * [Output Only] The list of network endpoint groups that are contained in this scope.
     */
    networkEndpointGroups?: NetworkEndpointGroup[];
    /**
     * [Output Only] An informational warning that replaces the list of network endpoint groups when the list is empty.
     */
    warning?: NetworkEndpointGroupsScopedListWarning;
}
