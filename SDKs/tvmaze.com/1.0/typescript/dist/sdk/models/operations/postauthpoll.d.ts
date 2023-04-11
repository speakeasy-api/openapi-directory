import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthPollRequestBody extends SpeakeasyBase {
    token?: string;
}
/**
 * The user confirmed the authentication request
 */
export declare class PostAuthPoll200ApplicationJSON extends SpeakeasyBase {
    /**
     * The user's API key
     */
    apikey?: string;
    /**
     * The user's username
     */
    username?: string;
}
export declare class PostAuthPollResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user confirmed the authentication request
     */
    postAuthPoll200ApplicationJSONObject?: PostAuthPoll200ApplicationJSON;
}
