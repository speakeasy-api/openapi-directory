import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicenseImagesSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * (Deprecated) Image format
 */
export declare enum LicenseImagesFormatEnum {
    Eps = "eps",
    Jpg = "jpg"
}
/**
 * Image size
 */
export declare enum LicenseImagesSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Vector = "vector",
    Custom = "custom"
}
export declare class LicenseImagesRequest extends SpeakeasyBase {
    /**
     * List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters
     */
    licenseImageRequest: shared.LicenseImageRequest;
    /**
     * (Deprecated) Image format
     */
    format?: LicenseImagesFormatEnum;
    /**
     * Search ID that was provided in the results of an image search
     */
    searchId?: string;
    /**
     * Image size
     */
    size?: LicenseImagesSizeEnum;
    /**
     * Subscription ID to use to license the image
     */
    subscriptionId?: string;
}
export declare class LicenseImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    licenseImageResultDataList?: shared.LicenseImageResultDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
