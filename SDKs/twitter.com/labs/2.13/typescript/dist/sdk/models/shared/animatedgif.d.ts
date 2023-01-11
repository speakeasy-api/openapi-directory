import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AnimatedGifTypeEnum {
    AnimatedGif = "animated_gif"
}
/**
 * This contains the list of the fields that are common to all media returned.
**/
export declare class AnimatedGif extends SpeakeasyBase {
    height?: number;
    mediaKey?: string;
    previewImageUrl?: string;
    type?: AnimatedGifTypeEnum;
    width?: number;
}
