import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HashtagSuggestionsRequest extends SpeakeasyBase {
    /**
     * Topic
     */
    text: string;
}
export declare class HashtagSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
