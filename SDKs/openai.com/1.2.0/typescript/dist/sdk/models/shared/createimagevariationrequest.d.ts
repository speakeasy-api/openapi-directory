import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseFormatEnum } from "./responseformatenum";
import { SizeEnum } from "./sizeenum";
export declare class CreateImageVariationRequestImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class CreateImageVariationRequest extends SpeakeasyBase {
    /**
     * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
     */
    image: CreateImageVariationRequestImage;
    /**
     * The number of images to generate. Must be between 1 and 10.
     */
    n?: number;
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
