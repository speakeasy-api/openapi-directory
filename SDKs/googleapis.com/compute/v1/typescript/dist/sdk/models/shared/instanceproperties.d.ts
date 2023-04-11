import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { AttachedDisk } from "./attacheddisk";
import { ConfidentialInstanceConfig } from "./confidentialinstanceconfig";
import { Metadata } from "./metadata";
import { NetworkInterface } from "./networkinterface";
import { NetworkPerformanceConfig } from "./networkperformanceconfig";
import { ReservationAffinity } from "./reservationaffinity";
import { Scheduling } from "./scheduling";
import { ServiceAccount } from "./serviceaccount";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { Tags } from "./tags";
/**
 * KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified.
 */
export declare enum InstancePropertiesKeyRevocationActionTypeEnum {
    KeyRevocationActionTypeUnspecified = "KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED",
    None = "NONE",
    Stop = "STOP"
}
/**
 * The private IPv6 google access type for VMs. If not specified, use INHERIT_FROM_SUBNETWORK as default. Note that for MachineImage, this is not supported yet.
 */
export declare enum InstancePropertiesPrivateIpv6GoogleAccessEnum {
    EnableBidirectionalAccessToGoogle = "ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE",
    EnableOutboundVmAccessToGoogle = "ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE",
    InheritFromSubnetwork = "INHERIT_FROM_SUBNETWORK"
}
export declare class InstanceProperties extends SpeakeasyBase {
    /**
     * Specifies options for controlling advanced machine features. Options that would traditionally be configured in a BIOS belong here. Features that require operating system support may have corresponding entries in the GuestOsFeatures of an Image (e.g., whether or not the OS in the Image supports nested virtualization being enabled or disabled).
     */
    advancedMachineFeatures?: AdvancedMachineFeatures;
    /**
     * Enables instances created based on these properties to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true. If unsure, leave this set to false. See the Enable IP forwarding documentation for more information.
     */
    canIpForward?: boolean;
    /**
     * A set of Confidential Instance options.
     */
    confidentialInstanceConfig?: ConfidentialInstanceConfig;
    /**
     * An optional text description for the instances that are created from these properties.
     */
    description?: string;
    /**
     * An array of disks that are associated with the instances that are created from these properties.
     */
    disks?: AttachedDisk[];
    /**
     * A list of guest accelerator cards' type and count to use for instances created from these properties.
     */
    guestAccelerators?: AcceleratorConfig[];
    /**
     * KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified.
     */
    keyRevocationActionType?: InstancePropertiesKeyRevocationActionTypeEnum;
    /**
     * Labels to apply to instances that are created from these properties.
     */
    labels?: Record<string, string>;
    /**
     * The machine type to use for instances that are created from these properties.
     */
    machineType?: string;
    /**
     * A metadata key/value entry.
     */
    metadata?: Metadata;
    /**
     * Minimum cpu/platform to be used by instances. The instance may be scheduled on the specified or newer cpu/platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge". For more information, read Specifying a Minimum CPU Platform.
     */
    minCpuPlatform?: string;
    /**
     * An array of network access configurations for this interface.
     */
    networkInterfaces?: NetworkInterface[];
    networkPerformanceConfig?: NetworkPerformanceConfig;
    /**
     * The private IPv6 google access type for VMs. If not specified, use INHERIT_FROM_SUBNETWORK as default. Note that for MachineImage, this is not supported yet.
     */
    privateIpv6GoogleAccess?: InstancePropertiesPrivateIpv6GoogleAccessEnum;
    /**
     * Specifies the reservations that this instance can consume from.
     */
    reservationAffinity?: ReservationAffinity;
    /**
     * Resource manager tags to be bound to the instance. Tag keys and values have the same definition as resource manager tags. Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. The field is ignored (both PUT & PATCH) when empty.
     */
    resourceManagerTags?: Record<string, string>;
    /**
     * Resource policies (names, not URLs) applied to instances created from these properties. Note that for MachineImage, this is not supported yet.
     */
    resourcePolicies?: string[];
    /**
     * Sets the scheduling options for an Instance.
     */
    scheduling?: Scheduling;
    /**
     * A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from these properties. Use metadata queries to obtain the access tokens for these instances.
     */
    serviceAccounts?: ServiceAccount[];
    /**
     * A set of Shielded Instance options.
     */
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    /**
     * A set of instance tags.
     */
    tags?: Tags;
}
