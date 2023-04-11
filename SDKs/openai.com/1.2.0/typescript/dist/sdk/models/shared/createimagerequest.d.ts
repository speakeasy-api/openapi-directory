import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
 */
export declare enum CreateImageRequestResponseFormatEnum {
    Url = "url",
    B64Json = "b64_json"
}
/**
 * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
 */
export declare enum CreateImageRequestSizeEnum {
    TwoHundredAndFiftySixx256 = "256x256",
    FiveHundredAndTwelvex512 = "512x512",
    OneThousandAndTwentyFourx1024 = "1024x1024"
}
export declare class CreateImageRequest extends SpeakeasyBase {
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
    responseFormat?: CreateImageRequestResponseFormatEnum;
    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
     */
    size?: CreateImageRequestSizeEnum;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     * @remarks
     *
     */
    user?: string;
}
