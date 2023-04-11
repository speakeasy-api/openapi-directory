import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
/**
 * The response to a licensing request for an sound effects
 */
export declare class LicenseSFXResult extends SpeakeasyBase {
    /**
     * Number of credits that this licensing event used
     */
    allotmentCharge?: number;
    /**
     * URL object
     */
    download?: Url;
    /**
     * Error message, appears only if there was an error
     */
    error?: string;
    /**
     * ID of the license event
     */
    licenseId?: string;
    /**
     * Sound effects ID that was licensed
     */
    sfxId: string;
}
