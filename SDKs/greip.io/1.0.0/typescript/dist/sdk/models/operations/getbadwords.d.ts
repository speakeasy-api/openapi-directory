import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBadWordsRequest extends SpeakeasyBase {
    /**
     * Sets the format of the API response. JSON is the default format.
     */
    format?: string;
    /**
     * Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
     */
    key: string;
    /**
     * Set to `yes` to list the bad-words as an Array.
     */
    listBadWords?: string;
    /**
     * Set to `yes` to return only the score of the text and whether it's safe or not.
     */
    scoreOnly?: string;
    /**
     * The text you want to check.
     */
    text: string;
}
export declare class GetBadWordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
