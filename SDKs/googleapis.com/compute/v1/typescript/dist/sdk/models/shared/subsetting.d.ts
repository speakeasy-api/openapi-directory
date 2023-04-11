import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubsettingPolicyEnum {
    ConsistentHashSubsetting = "CONSISTENT_HASH_SUBSETTING",
    None = "NONE"
}
/**
 * Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing, Internal HTTP(S) load balancing and Traffic Director.
 */
export declare class Subsetting extends SpeakeasyBase {
    policy?: SubsettingPolicyEnum;
}
