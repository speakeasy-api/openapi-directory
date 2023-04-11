import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveBgMultipartBgImageFile extends SpeakeasyBase {
    bgImageFile: string;
    content: Uint8Array;
}
/**
 * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
 *
 * @remarks
 *
 */
export declare enum RemoveBgMultipartChannelsEnum {
    Rgba = "rgba",
    Alpha = "alpha"
}
/**
 * Result image format:
 *
 * @remarks
 * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
 * "png" = PNG format with alpha transparency,
 * "jpg" = JPG format, no transparency,
 * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
 *
 */
export declare enum RemoveBgMultipartFormatEnum {
    Auto = "auto",
    Png = "png",
    Jpg = "jpg",
    Zip = "zip"
}
export declare class RemoveBgMultipartImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
/**
 * Maximum output image resolution:
 *
 * @remarks
 * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
 * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
 * "auto" = Use highest available resolution (based on image size and available credits).
 *
 * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
 *
 */
export declare enum RemoveBgMultipartSizeEnum {
    Preview = "preview",
    Full = "full",
    Auto = "auto"
}
/**
 * Foreground type:
 *
 * @remarks
 * "auto" = Automatically detect kind of foreground,
 * "person" = Use person(s) as foreground,
 * "product" = Use product(s) as foreground.
 * "car" = Use car as foreground,
 *
 */
export declare enum RemoveBgMultipartTypeEnum {
    Auto = "auto",
    Person = "person",
    Product = "product",
    Car = "car"
}
/**
 * Classification level of the detected foreground type:
 *
 * @remarks
 * "none" = No classification (X-Type Header won't bet set on the response)
 * "1" = Use coarse classification classes: [person, product, animal, car, other]
 * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
 * "latest" = Always use the latest classification classes available
 *
 */
export declare enum RemoveBgMultipartTypeLevelEnum {
    None = "none",
    One = "1",
    Two = "2",
    Latest = "latest"
}
export declare class RemoveBgMultipart extends SpeakeasyBase {
    /**
     * Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).
     *
     * @remarks
     *
     */
    addShadow?: boolean;
    /**
     * Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)
     *
     * @remarks
     *
     */
    bgColor?: string;
    /**
     * Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)
     */
    bgImageFile?: RemoveBgMultipartBgImageFile;
    /**
     * Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)
     */
    bgImageUrl?: string;
    /**
     * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
     *
     * @remarks
     *
     */
    channels?: RemoveBgMultipartChannelsEnum;
    /**
     * Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.
     *
     * @remarks
     *
     */
    crop?: boolean;
    /**
     * Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
     *
     * @remarks
     *
     */
    cropMargin?: string;
    /**
     * Result image format:
     *
     * @remarks
     * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
     * "png" = PNG format with alpha transparency,
     * "jpg" = JPG format, no transparency,
     * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
     *
     */
    format?: RemoveBgMultipartFormatEnum;
    /**
     * Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     */
    imageFile?: RemoveBgMultipartImageFile;
    /**
     * Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)
     */
    imageFileB64?: string;
    /**
     * Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     */
    imageUrl?: string;
    /**
     * Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
     *
     * @remarks
     *
     */
    position?: string;
    /**
     * Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").
     *
     * @remarks
     *
     */
    roi?: string;
    /**
     * Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).
     *
     * @remarks
     *
     */
    scale?: string;
    /**
     * Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.
     *
     * @remarks
     *
     */
    semitransparency?: boolean;
    /**
     * Maximum output image resolution:
     *
     * @remarks
     * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
     * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
     * "auto" = Use highest available resolution (based on image size and available credits).
     *
     * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
     *
     */
    size?: RemoveBgMultipartSizeEnum;
    /**
     * Foreground type:
     *
     * @remarks
     * "auto" = Automatically detect kind of foreground,
     * "person" = Use person(s) as foreground,
     * "product" = Use product(s) as foreground.
     * "car" = Use car as foreground,
     *
     */
    type?: RemoveBgMultipartTypeEnum;
    /**
     * Classification level of the detected foreground type:
     *
     * @remarks
     * "none" = No classification (X-Type Header won't bet set on the response)
     * "1" = Use coarse classification classes: [person, product, animal, car, other]
     * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
     * "latest" = Always use the latest classification classes available
     *
     */
    typeLevel?: RemoveBgMultipartTypeLevelEnum;
}
