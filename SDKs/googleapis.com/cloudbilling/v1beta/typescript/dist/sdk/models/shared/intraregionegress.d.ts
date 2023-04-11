import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Egress traffic within the same region. When source region and destination region are in the same zone, using the internal IP addresses, there isn't any egress charge.
 */
export declare class IntraRegionEgress extends SpeakeasyBase {
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
}
