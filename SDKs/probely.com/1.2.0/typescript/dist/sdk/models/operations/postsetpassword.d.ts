import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSetpasswordRequestBody extends SpeakeasyBase {
    confpassword: string;
    password: string;
    /**
     * Reset token received in the user email
     */
    token: string;
}
/**
 * Bad Request
 */
export declare class PostSetpassword400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Success
 */
export declare class PostSetpassword200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostSetpasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postSetpassword200ApplicationJSONObject?: PostSetpassword200ApplicationJSON;
    /**
     * Bad Request
     */
    postSetpassword400ApplicationJSONObject?: PostSetpassword400ApplicationJSON;
}
