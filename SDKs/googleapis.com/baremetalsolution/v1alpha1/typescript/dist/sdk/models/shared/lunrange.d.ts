import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A LUN range.
 */
export declare class LunRange extends SpeakeasyBase {
    /**
     * Number of LUNs to create.
     */
    quantity?: number;
    /**
     * The requested size of each LUN, in GB.
     */
    sizeGb?: number;
}
