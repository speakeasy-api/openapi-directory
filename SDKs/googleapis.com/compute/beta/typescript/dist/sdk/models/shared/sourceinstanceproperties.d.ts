import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { Metadata } from "./metadata";
import { NetworkInterface } from "./networkinterface";
import { SavedAttachedDisk } from "./savedattacheddisk";
import { Scheduling } from "./scheduling";
import { ServiceAccount } from "./serviceaccount";
import { Tags } from "./tags";
/**
 * KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified.
 */
export declare enum SourceInstancePropertiesKeyRevocationActionTypeEnum {
    KeyRevocationActionTypeUnspecified = "KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED",
    None = "NONE",
    Stop = "STOP"
}
/**
 * PostKeyRevocationActionType of the instance.
 */
export declare enum SourceInstancePropertiesPostKeyRevocationActionTypeEnum {
    Noop = "NOOP",
    PostKeyRevocationActionTypeUnspecified = "POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED",
    Shutdown = "SHUTDOWN"
}
/**
 * DEPRECATED: Please use compute#instanceProperties instead. New properties will not be added to this field.
 */
export declare class SourceInstanceProperties extends SpeakeasyBase {
    /**
     * Enables instances created based on this machine image to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the Enable IP forwarding documentation for more information.
     */
    canIpForward?: boolean;
    /**
     * Whether the instance created from this machine image should be protected against deletion.
     */
    deletionProtection?: boolean;
    /**
     * An optional text description for the instances that are created from this machine image.
     */
    description?: string;
    /**
     * An array of disks that are associated with the instances that are created from this machine image.
     */
    disks?: SavedAttachedDisk[];
    /**
     * A list of guest accelerator cards' type and count to use for instances created from this machine image.
     */
    guestAccelerators?: AcceleratorConfig[];
    /**
     * KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified.
     */
    keyRevocationActionType?: SourceInstancePropertiesKeyRevocationActionTypeEnum;
    /**
     * Labels to apply to instances that are created from this machine image.
     */
    labels?: Record<string, string>;
    /**
     * The machine type to use for instances that are created from this machine image.
     */
    machineType?: string;
    /**
     * A metadata key/value entry.
     */
    metadata?: Metadata;
    /**
     * Minimum cpu/platform to be used by instances created from this machine image. The instance may be scheduled on the specified or newer cpu/platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge". For more information, read Specifying a Minimum CPU Platform.
     */
    minCpuPlatform?: string;
    /**
     * An array of network access configurations for this interface.
     */
    networkInterfaces?: NetworkInterface[];
    /**
     * PostKeyRevocationActionType of the instance.
     */
    postKeyRevocationActionType?: SourceInstancePropertiesPostKeyRevocationActionTypeEnum;
    /**
     * Sets the scheduling options for an Instance.
     */
    scheduling?: Scheduling;
    /**
     * A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this machine image. Use metadata queries to obtain the access tokens for these instances.
     */
    serviceAccounts?: ServiceAccount[];
    /**
     * A set of instance tags.
     */
    tags?: Tags;
}
