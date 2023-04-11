import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class URLInfoRequest extends SpeakeasyBase {
    /**
     * If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)
     */
    fetchContent?: boolean;
    /**
     * Ignore any TLS/SSL certificate errors and load the URL anyway
     */
    ignoreCertificateErrors?: boolean;
    /**
     * If the request fails for any reason try again this many times
     */
    retry?: number;
    /**
     * Timeout in seconds. Give up if still trying to load the URL after this number of seconds
     */
    timeout?: number;
    /**
     * The URL to probe
     */
    url: string;
}
export declare class URLInfoResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    urlInfoResponse?: shared.URLInfoResponse;
}
