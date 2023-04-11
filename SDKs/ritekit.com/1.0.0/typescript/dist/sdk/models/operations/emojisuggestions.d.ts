import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmojiSuggestionsRequest extends SpeakeasyBase {
    /**
     * Text of the post
     */
    text: string;
}
export declare class EmojiSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
