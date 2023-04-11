import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { Url } from "./url";
/**
 * The response to a licensing request for a video
 */
export declare class LicenseVideoResult extends SpeakeasyBase {
    /**
     * Number of credits that this licensing event used
     */
    allotmentCharge?: number;
    /**
     * URL object
     */
    download?: Url;
    /**
     * Potential error that occurred during licensing
     */
    error?: string;
    /**
     * ID of the license event
     */
    licenseId?: string;
    /**
     * Price
     */
    price?: Price;
    /**
     * ID of the video that was licensed
     */
    videoId: string;
}
