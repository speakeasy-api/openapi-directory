import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostResetRequestBody extends SpeakeasyBase {
    email: string;
}
/**
 * Bad Request
 */
export declare class PostReset400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    error?: string;
}
/**
 * Success
 */
export declare class PostReset200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postReset200ApplicationJSONObject?: PostReset200ApplicationJSON;
    /**
     * Bad Request
     */
    postReset400ApplicationJSONObject?: PostReset400ApplicationJSON;
}
