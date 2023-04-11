import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies network collocation
 */
export declare enum ResourcePolicyGroupPlacementPolicyCollocationEnum {
    Collocated = "COLLOCATED",
    UnspecifiedCollocation = "UNSPECIFIED_COLLOCATION"
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
     * Specifies the number of max logical switches.
     */
    maxDistance?: number;
    /**
     * Number of VMs in this placement group. Google does not recommend that you use this field unless you use a compact policy and you want your policy to work only if it contains this exact number of VMs.
     */
    vmCount?: number;
}
