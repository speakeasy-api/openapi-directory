import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
 */
export declare class ILBSubsettingConfig extends SpeakeasyBase {
    /**
     * Enables l4 ILB subsetting for this cluster.
     */
    enabled?: boolean;
}
