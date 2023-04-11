import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIPLookupRequest extends SpeakeasyBase {
    /**
     * Sets the format of the API response. JSON is the default format.
     */
    format?: string;
    /**
     * The IP Address you want to lookup.
     */
    ip: string;
    /**
     * Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.
     */
    key: string;
    /**
     * Used to inform the API to retrieve the response in your native language.
     */
    lang?: string;
    /**
     * The modules you want to use of the request. It's a CSV (Comma Separated Values)
     */
    params?: string;
}
export declare class GetIPLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
