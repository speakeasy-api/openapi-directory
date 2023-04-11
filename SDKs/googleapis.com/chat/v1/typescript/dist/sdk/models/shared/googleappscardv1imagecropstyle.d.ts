import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The crop type.
 */
export declare enum GoogleAppsCardV1ImageCropStyleTypeEnum {
    ImageCropTypeUnspecified = "IMAGE_CROP_TYPE_UNSPECIFIED",
    Square = "SQUARE",
    Circle = "CIRCLE",
    RectangleCustom = "RECTANGLE_CUSTOM",
    Rectangle43 = "RECTANGLE_4_3"
}
/**
 * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
 */
export declare class GoogleAppsCardV1ImageCropStyle extends SpeakeasyBase {
    /**
     * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
     */
    aspectRatio?: number;
    /**
     * The crop type.
     */
    type?: GoogleAppsCardV1ImageCropStyleTypeEnum;
}
