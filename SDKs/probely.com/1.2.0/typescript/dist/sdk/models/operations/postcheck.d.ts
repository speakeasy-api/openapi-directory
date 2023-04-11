import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCheckRequestBody extends SpeakeasyBase {
    /**
     * Reset token received in the user email
     */
    token: string;
}
/**
 * Bad Request
 */
export declare class PostCheck400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Success
 */
export declare class PostCheck200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postCheck200ApplicationJSONObject?: PostCheck200ApplicationJSON;
    /**
     * Bad Request
     */
    postCheck400ApplicationJSONObject?: PostCheck400ApplicationJSON;
}
