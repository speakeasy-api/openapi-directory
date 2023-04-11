import { SpeakeasyBase } from "../../../internal/utils";
import { ServerTlsSettings } from "./servertlssettings";
/**
 * The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. This can be one of TLS_1_0, TLS_1_1, TLS_1_2.
 */
export declare enum SslPolicyMinTlsVersionEnum {
    Tls10 = "TLS_1_0",
    Tls11 = "TLS_1_1",
    Tls12 = "TLS_1_2"
}
/**
 * Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. This can be one of COMPATIBLE, MODERN, RESTRICTED, or CUSTOM. If using CUSTOM, the set of SSL features to enable must be specified in the customFeatures field.
 */
export declare enum SslPolicyProfileEnum {
    Compatible = "COMPATIBLE",
    Custom = "CUSTOM",
    Modern = "MODERN",
    Restricted = "RESTRICTED"
}
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
export declare enum SslPolicyWarningsCodeEnum {
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
export declare class SslPolicyWarningsData extends SpeakeasyBase {
    /**
     * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
     */
    key?: string;
    /**
     * [Output Only] A warning data value corresponding to the key.
     */
    value?: string;
}
export declare class SslPolicyWarnings extends SpeakeasyBase {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    code?: SslPolicyWarningsCodeEnum;
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" }
     */
    data?: SslPolicyWarningsData[];
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    message?: string;
}
/**
 * Represents an SSL Policy resource. Use SSL policies to control the SSL features, such as versions and cipher suites, offered by an HTTPS or SSL Proxy load balancer. For more information, read SSL Policy Concepts.
 */
export declare class SslPolicy extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * A list of features enabled when the selected profile is CUSTOM. The method returns the set of features that can be specified in this list. This field must be empty if the profile is not CUSTOM.
     */
    customFeatures?: string[];
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The list of features enabled in the SSL policy.
     */
    enabledFeatures?: string[];
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a SslPolicy. An up-to-date fingerprint must be provided in order to update the SslPolicy, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an SslPolicy.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output only] Type of the resource. Always compute#sslPolicyfor SSL policies.
     */
    kind?: string;
    /**
     * The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. This can be one of TLS_1_0, TLS_1_1, TLS_1_2.
     */
    minTlsVersion?: SslPolicyMinTlsVersionEnum;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. This can be one of COMPATIBLE, MODERN, RESTRICTED, or CUSTOM. If using CUSTOM, the set of SSL features to enable must be specified in the customFeatures field.
     */
    profile?: SslPolicyProfileEnum;
    /**
     * [Output Only] URL of the region where the regional SSL policy resides. This field is not applicable to global SSL policies.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * The TLS settings for the server.
     */
    tlsSettings?: ServerTlsSettings;
    /**
     * [Output Only] If potential misconfigurations are detected for this SSL policy, this field will be populated with warning messages.
     */
    warnings?: SslPolicyWarnings[];
}
