import { SpeakeasyBase } from "../../../internal/utils";
import { MobileCarrier } from "./mobilecarrier";
/**
 * Mobile Carrier List Response
 */
export declare class MobileCarriersListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
     */
    kind?: string;
    /**
     * Mobile carrier collection.
     */
    mobileCarriers?: MobileCarrier[];
}
