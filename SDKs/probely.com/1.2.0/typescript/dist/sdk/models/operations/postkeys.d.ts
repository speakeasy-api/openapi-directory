import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostKeys403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostKeys401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PostKeysResponse extends SpeakeasyBase {
    /**
     * API Key object
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    postKeys401ApplicationJSONObject?: PostKeys401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postKeys403ApplicationJSONObject?: PostKeys403ApplicationJSON;
}
