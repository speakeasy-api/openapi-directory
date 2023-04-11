import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare enum ImageCreateResultStatusEnum {
    Ok = "OK",
    OKDuplicate = "OKDuplicate",
    ErrorSource = "ErrorSource",
    ErrorImageFormat = "ErrorImageFormat",
    ErrorImageSize = "ErrorImageSize",
    ErrorStorage = "ErrorStorage",
    ErrorLimitExceed = "ErrorLimitExceed",
    ErrorTagLimitExceed = "ErrorTagLimitExceed",
    ErrorUnknown = "ErrorUnknown"
}
export declare class ImageCreateResult extends SpeakeasyBase {
    /**
     * Image model to be sent as JSON
     */
    image?: Image;
    sourceUrl?: string;
    status?: ImageCreateResultStatusEnum;
}
