import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies network collocation
 */
export declare enum ResourcePolicyGroupPlacementPolicyCollocationEnum {
    Clustered = "CLUSTERED",
    Collocated = "COLLOCATED",
    UnspecifiedCollocation = "UNSPECIFIED_COLLOCATION"
}
/**
 * Specifies network locality
 */
export declare enum ResourcePolicyGroupPlacementPolicyLocalityEnum {
    BestEffort = "BEST_EFFORT",
    Strict = "STRICT",
    UnspecifiedLocality = "UNSPECIFIED_LOCALITY"
}
/**
 * Scope specifies the availability domain to which the VMs should be spread.
 */
export declare enum ResourcePolicyGroupPlacementPolicyScopeEnum {
    Host = "HOST",
    UnspecifiedScope = "UNSPECIFIED_SCOPE"
}
/**
 * Specifies instances to hosts placement relationship
 */
export declare enum ResourcePolicyGroupPlacementPolicyStyleEnum {
    Compact = "COMPACT",
    FullySpread = "FULLY_SPREAD",
    UnspecifiedPlacementType = "UNSPECIFIED_PLACEMENT_TYPE"
}
/**
 * A GroupPlacementPolicy specifies resource placement configuration. It specifies the failure bucket separation as well as network locality
 */
export declare class ResourcePolicyGroupPlacementPolicy extends SpeakeasyBase {
    /**
     * The number of availability domains to spread instances across. If two instances are in different availability domain, they are not in the same low latency network.
     */
    availabilityDomainCount?: number;
    /**
     * Specifies network collocation
     */
    collocation?: ResourcePolicyGroupPlacementPolicyCollocationEnum;
    /**
     * Specifies network locality
     */
    locality?: ResourcePolicyGroupPlacementPolicyLocalityEnum;
    /**
     * Specifies the number of max logical switches.
     */
    maxDistance?: number;
    /**
     * Scope specifies the availability domain to which the VMs should be spread.
     */
    scope?: ResourcePolicyGroupPlacementPolicyScopeEnum;
    /**
     * Specifies instances to hosts placement relationship
     */
    style?: ResourcePolicyGroupPlacementPolicyStyleEnum;
    /**
     * Specifies the shape of the TPU slice
     */
    tpuTopology?: string;
    /**
     * Number of VMs in this placement group. Google does not recommend that you use this field unless you use a compact policy and you want your policy to work only if it contains this exact number of VMs.
     */
    vmCount?: number;
}
