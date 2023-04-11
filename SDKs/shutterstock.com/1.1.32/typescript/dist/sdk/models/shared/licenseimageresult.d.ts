import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { Url } from "./url";
/**
 * The response to a licensing request for an image
 */
export declare class LicenseImageResult extends SpeakeasyBase {
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
     * Image ID that was licensed
     */
    imageId: string;
    /**
     * ID of the license event
     */
    licenseId?: string;
    /**
     * Price
     */
    price?: Price;
}
