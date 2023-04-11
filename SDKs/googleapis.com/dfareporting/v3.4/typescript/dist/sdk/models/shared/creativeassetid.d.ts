import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
 */
export declare enum CreativeAssetIdTypeEnum {
    Image = "IMAGE",
    Flash = "FLASH",
    Video = "VIDEO",
    Html = "HTML",
    HtmlImage = "HTML_IMAGE",
    Audio = "AUDIO"
}
/**
 * Creative Asset ID.
 */
export declare class CreativeAssetId extends SpeakeasyBase {
    /**
     * Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
     */
    name?: string;
    /**
     * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
     */
    type?: CreativeAssetIdTypeEnum;
}
