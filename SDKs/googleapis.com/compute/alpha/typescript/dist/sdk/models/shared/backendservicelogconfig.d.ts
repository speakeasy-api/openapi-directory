import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated in favor of optionalMode. This field can only be specified if logging is enabled for this backend service. Configures whether all, none or a subset of optional fields should be added to the reported logs. One of [INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM]. Default is EXCLUDE_ALL_OPTIONAL.
 */
export declare enum BackendServiceLogConfigOptionalEnum {
    Custom = "CUSTOM",
    ExcludeAllOptional = "EXCLUDE_ALL_OPTIONAL",
    IncludeAllOptional = "INCLUDE_ALL_OPTIONAL",
    UnspecifiedOptionalMode = "UNSPECIFIED_OPTIONAL_MODE"
}
/**
 * This field can only be specified if logging is enabled for this backend service. Configures whether all, none or a subset of optional fields should be added to the reported logs. One of [INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM]. Default is EXCLUDE_ALL_OPTIONAL.
 */
export declare enum BackendServiceLogConfigOptionalModeEnum {
    Custom = "CUSTOM",
    ExcludeAllOptional = "EXCLUDE_ALL_OPTIONAL",
    IncludeAllOptional = "INCLUDE_ALL_OPTIONAL",
    UnspecifiedOptionalMode = "UNSPECIFIED_OPTIONAL_MODE"
}
/**
 * The available logging options for the load balancer traffic served by this backend service.
 */
export declare class BackendServiceLogConfig extends SpeakeasyBase {
    /**
     * Denotes whether to enable logging for the load balancer traffic served by this backend service. The default value is false.
     */
    enable?: boolean;
    /**
     * Deprecated in favor of optionalMode. This field can only be specified if logging is enabled for this backend service. Configures whether all, none or a subset of optional fields should be added to the reported logs. One of [INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM]. Default is EXCLUDE_ALL_OPTIONAL.
     */
    optional?: BackendServiceLogConfigOptionalEnum;
    /**
     * This field can only be specified if logging is enabled for this backend service and "logConfig.optionalMode" was set to CUSTOM. Contains a list of optional fields you want to include in the logs. For example: serverInstance, serverGkeDetails.cluster, serverGkeDetails.pod.podNamespace
     */
    optionalFields?: string[];
    /**
     * This field can only be specified if logging is enabled for this backend service. Configures whether all, none or a subset of optional fields should be added to the reported logs. One of [INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM]. Default is EXCLUDE_ALL_OPTIONAL.
     */
    optionalMode?: BackendServiceLogConfigOptionalModeEnum;
    /**
     * This field can only be specified if logging is enabled for this backend service. The value of the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0.
     */
    sampleRate?: number;
}
