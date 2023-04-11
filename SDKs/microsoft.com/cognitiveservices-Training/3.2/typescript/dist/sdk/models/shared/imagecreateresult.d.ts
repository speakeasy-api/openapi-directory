import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Status of the image creation.
 */
export declare enum ImageCreateResultStatusEnum {
    Ok = "OK",
    OKDuplicate = "OKDuplicate",
    ErrorSource = "ErrorSource",
    ErrorImageFormat = "ErrorImageFormat",
    ErrorImageSize = "ErrorImageSize",
    ErrorStorage = "ErrorStorage",
    ErrorLimitExceed = "ErrorLimitExceed",
    ErrorTagLimitExceed = "ErrorTagLimitExceed",
    ErrorRegionLimitExceed = "ErrorRegionLimitExceed",
    ErrorUnknown = "ErrorUnknown",
    ErrorNegativeAndRegularTagOnSameImage = "ErrorNegativeAndRegularTagOnSameImage"
}
export declare class ImageCreateResult extends SpeakeasyBase {
    /**
     * Image model to be sent as JSON.
     */
    image?: Image;
    /**
     * Source URL of the image.
     */
    sourceUrl?: string;
    /**
     * Status of the image creation.
     */
    status?: ImageCreateResultStatusEnum;
}
