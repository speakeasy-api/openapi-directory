import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutoHashtagRequest extends SpeakeasyBase {
    /**
     * Position of hashtags: end => at the end, auto => anywhere
     */
    hashtagPosition?: string;
    /**
     * Max number of hashtags.
     */
    maxHashtags?: number;
    /**
     * Text of the post
     */
    post: string;
}
export declare class AutoHashtagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
