import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1ImageCropStyle } from "./googleappscardv1imagecropstyle";
/**
 * Represents an image.
 */
export declare class GoogleAppsCardV1ImageComponent extends SpeakeasyBase {
    /**
     * The accessibility label for the image.
     */
    altText?: string;
    /**
     * Represents the complete border style applied to items in a widget.
     */
    borderStyle?: GoogleAppsCardV1BorderStyle;
    /**
     * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
     */
    cropStyle?: GoogleAppsCardV1ImageCropStyle;
    /**
     * The image URL.
     */
    imageUri?: string;
}
