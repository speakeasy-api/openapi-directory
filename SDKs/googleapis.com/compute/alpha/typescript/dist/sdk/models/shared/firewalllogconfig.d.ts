import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field can only be specified for a particular firewall rule if logging is enabled for that rule. This field denotes whether to include or exclude metadata for firewall logs.
 */
export declare enum FirewallLogConfigMetadataEnum {
    ExcludeAllMetadata = "EXCLUDE_ALL_METADATA",
    IncludeAllMetadata = "INCLUDE_ALL_METADATA"
}
/**
 * The available logging options for a firewall rule.
 */
export declare class FirewallLogConfig extends SpeakeasyBase {
    /**
     * This field denotes whether to enable logging for a particular firewall rule.
     */
    enable?: boolean;
    /**
     * This field can only be specified for a particular firewall rule if logging is enabled for that rule. This field denotes whether to include or exclude metadata for firewall logs.
     */
    metadata?: FirewallLogConfigMetadataEnum;
}
