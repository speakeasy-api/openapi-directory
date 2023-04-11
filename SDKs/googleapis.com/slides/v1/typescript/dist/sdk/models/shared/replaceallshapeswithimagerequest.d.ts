import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
/**
 * The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used.
 */
export declare enum ReplaceAllShapesWithImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}
/**
 * The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence.
 */
export declare enum ReplaceAllShapesWithImageRequestReplaceMethodEnum {
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}
/**
 * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
 */
export declare class ReplaceAllShapesWithImageRequest extends SpeakeasyBase {
    /**
     * A criteria that matches a specific string of text in a shape or table.
     */
    containsText?: SubstringMatchCriteria;
    /**
     * The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used.
     */
    imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;
    /**
     * The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.
     */
    imageUrl?: string;
    /**
     * If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
     */
    pageObjectIds?: string[];
    /**
     * The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence.
     */
    replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethodEnum;
}
