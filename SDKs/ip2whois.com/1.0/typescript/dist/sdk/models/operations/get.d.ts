import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Domain name for lookup purpose.
     */
    domain: string;
    /**
     * Returns the API response in json (default) or xml format.
     */
    format?: string;
    /**
     * API key.
     */
    key: string;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get response from IP2WHOIS
     */
    get200TextHTMLString?: string;
}
