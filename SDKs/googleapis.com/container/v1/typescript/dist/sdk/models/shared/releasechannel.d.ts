import { SpeakeasyBase } from "../../../internal/utils";
/**
 * channel specifies which release channel the cluster is subscribed to.
 */
export declare enum ReleaseChannelChannelEnum {
    Unspecified = "UNSPECIFIED",
    Rapid = "RAPID",
    Regular = "REGULAR",
    Stable = "STABLE"
}
/**
 * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
 */
export declare class ReleaseChannel extends SpeakeasyBase {
    /**
     * channel specifies which release channel the cluster is subscribed to.
     */
    channel?: ReleaseChannelChannelEnum;
}
