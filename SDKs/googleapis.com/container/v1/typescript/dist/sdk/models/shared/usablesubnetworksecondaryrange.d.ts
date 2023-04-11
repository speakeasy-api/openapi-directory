import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is to determine the status of the secondary range programmably.
 */
export declare enum UsableSubnetworkSecondaryRangeStatusEnum {
    Unknown = "UNKNOWN",
    Unused = "UNUSED",
    InUseService = "IN_USE_SERVICE",
    InUseShareablePod = "IN_USE_SHAREABLE_POD",
    InUseManagedPod = "IN_USE_MANAGED_POD"
}
/**
 * Secondary IP range of a usable subnetwork.
 */
export declare class UsableSubnetworkSecondaryRange extends SpeakeasyBase {
    /**
     * The range of IP addresses belonging to this subnetwork secondary range.
     */
    ipCidrRange?: string;
    /**
     * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.
     */
    rangeName?: string;
    /**
     * This field is to determine the status of the secondary range programmably.
     */
    status?: UsableSubnetworkSecondaryRangeStatusEnum;
}
