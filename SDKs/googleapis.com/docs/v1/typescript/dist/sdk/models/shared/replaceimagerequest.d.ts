import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The replacement method.
 */
export declare enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterCrop = "CENTER_CROP"
}
/**
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
 */
export declare class ReplaceImageRequest extends SpeakeasyBase {
    /**
     * The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
     */
    imageObjectId?: string;
    /**
     * The replacement method.
     */
    imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;
    /**
     * The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the ImageProperties.source_uri field.
     */
    uri?: string;
}
