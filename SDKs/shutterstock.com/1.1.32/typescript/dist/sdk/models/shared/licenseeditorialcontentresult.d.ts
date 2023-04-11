import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
/**
 * The response to a licensing request for editorial content
 */
export declare class LicenseEditorialContentResult extends SpeakeasyBase {
    /**
     * For pre-paid plans, how many credits were used for the item license
     */
    allotmentCharge?: number;
    /**
     * URL object
     */
    download?: Url;
    /**
     * Editorial ID
     */
    editorialId: string;
    error?: string;
}
