import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableVersion } from "./availableversion";
/**
 * The release channel this configuration applies to.
 */
export declare enum ReleaseChannelConfigChannelEnum {
    Unspecified = "UNSPECIFIED",
    Rapid = "RAPID",
    Regular = "REGULAR",
    Stable = "STABLE"
}
/**
 * ReleaseChannelConfig exposes configuration for a release channel.
 */
export declare class ReleaseChannelConfig extends SpeakeasyBase {
    /**
     * Deprecated. This field has been deprecated and replaced with the valid_versions field.
     */
    availableVersions?: AvailableVersion[];
    /**
     * The release channel this configuration applies to.
     */
    channel?: ReleaseChannelConfigChannelEnum;
    /**
     * The default version for newly created clusters on the channel.
     */
    defaultVersion?: string;
    /**
     * List of valid versions for the channel.
     */
    validVersions?: string[];
}
