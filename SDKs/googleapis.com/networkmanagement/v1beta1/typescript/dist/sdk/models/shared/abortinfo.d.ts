import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Causes that the analysis is aborted.
 */
export declare enum AbortInfoCauseEnum {
    CauseUnspecified = "CAUSE_UNSPECIFIED",
    UnknownNetwork = "UNKNOWN_NETWORK",
    UnknownIp = "UNKNOWN_IP",
    UnknownProject = "UNKNOWN_PROJECT",
    PermissionDenied = "PERMISSION_DENIED",
    NoSourceLocation = "NO_SOURCE_LOCATION",
    InvalidArgument = "INVALID_ARGUMENT",
    NoExternalIp = "NO_EXTERNAL_IP",
    UnintendedDestination = "UNINTENDED_DESTINATION",
    TraceTooLong = "TRACE_TOO_LONG",
    InternalError = "INTERNAL_ERROR",
    SourceEndpointNotFound = "SOURCE_ENDPOINT_NOT_FOUND",
    MismatchedSourceNetwork = "MISMATCHED_SOURCE_NETWORK",
    DestinationEndpointNotFound = "DESTINATION_ENDPOINT_NOT_FOUND",
    MismatchedDestinationNetwork = "MISMATCHED_DESTINATION_NETWORK",
    Unsupported = "UNSUPPORTED",
    MismatchedIpVersion = "MISMATCHED_IP_VERSION",
    GkeKonnectivityProxyUnsupported = "GKE_KONNECTIVITY_PROXY_UNSUPPORTED"
}
/**
 * Details of the final state "abort" and associated resource.
 */
export declare class AbortInfo extends SpeakeasyBase {
    /**
     * Causes that the analysis is aborted.
     */
    cause?: AbortInfoCauseEnum;
    /**
     * List of project IDs that the user has specified in the request but does not have permission to access network configs. Analysis is aborted in this case with the PERMISSION_DENIED cause.
     */
    projectsMissingPermission?: string[];
    /**
     * URI of the resource that caused the abort.
     */
    resourceUri?: string;
}
