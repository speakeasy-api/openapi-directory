import { SpeakeasyBase } from "../../../internal/utils";
import { InterRegionEgress } from "./interregionegress";
import { IntraRegionEgress } from "./intraregionegress";
/**
 * Specify VM to VM egress.
 */
export declare class VmToVmEgressWorkload extends SpeakeasyBase {
    /**
     * Egress traffic between two regions.
     */
    interRegionEgress?: InterRegionEgress;
    /**
     * Egress traffic within the same region. When source region and destination region are in the same zone, using the internal IP addresses, there isn't any egress charge.
     */
    intraRegionEgress?: IntraRegionEgress;
}
