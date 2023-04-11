import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseFormatEnum } from "./responseformatenum";
import { SizeEnum } from "./sizeenum";
export declare class CreateImageEditRequestImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class CreateImageEditRequestMask extends SpeakeasyBase {
    content: Uint8Array;
    mask: string;
}
export declare class CreateImageEditRequest extends SpeakeasyBase {
    /**
     * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
     */
    image: CreateImageEditRequestImage;
    /**
     * An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`.
     */
    mask?: CreateImageEditRequestMask;
    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    n?: number;
    /**
     * A text description of the desired image(s). The maximum length is 1000 characters.
     */
    prompt: string;
    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
     */
    responseFormat?: ResponseFormatEnum;
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    size?: SizeEnum;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     * @remarks
     *
     */
    user?: string;
}
