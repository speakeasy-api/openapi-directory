import { SpeakeasyBase } from "../../../internal/utils";
import { RouterStatusNatStatusNatRuleStatus } from "./routerstatusnatstatusnatrulestatus";
/**
 * Status of a NAT contained in this router.
 */
export declare class RouterStatusNatStatus extends SpeakeasyBase {
    /**
     * A list of IPs auto-allocated for NAT. Example: ["1.1.1.1", "129.2.16.89"]
     */
    autoAllocatedNatIps?: string[];
    /**
     * A list of IPs auto-allocated for NAT that are in drain mode. Example: ["1.1.1.1", "179.12.26.133"].
     */
    drainAutoAllocatedNatIps?: string[];
    /**
     * A list of IPs user-allocated for NAT that are in drain mode. Example: ["1.1.1.1", "179.12.26.133"].
     */
    drainUserAllocatedNatIps?: string[];
    /**
     * The number of extra IPs to allocate. This will be greater than 0 only if user-specified IPs are NOT enough to allow all configured VMs to use NAT. This value is meaningful only when auto-allocation of NAT IPs is *not* used.
     */
    minExtraNatIpsNeeded?: number;
    /**
     * Unique name of this NAT.
     */
    name?: string;
    /**
     * Number of VM endpoints (i.e., Nics) that can use NAT.
     */
    numVmEndpointsWithNatMappings?: number;
    /**
     * Status of rules in this NAT.
     */
    ruleStatus?: RouterStatusNatStatusNatRuleStatus[];
    /**
     * A list of fully qualified URLs of reserved IP address resources.
     */
    userAllocatedNatIpResources?: string[];
    /**
     * A list of IPs user-allocated for NAT. They will be raw IP strings like "179.12.26.133".
     */
    userAllocatedNatIps?: string[];
}
