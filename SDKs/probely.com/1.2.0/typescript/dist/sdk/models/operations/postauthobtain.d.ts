import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class PostAuthObtain500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostAuthObtain400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostAuthObtain200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostAuthObtainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postAuthObtain200ApplicationJSONObject?: PostAuthObtain200ApplicationJSON;
    /**
     * Bad Request
     */
    postAuthObtain400ApplicationJSONObject?: PostAuthObtain400ApplicationJSON;
    /**
     * Internal server error
     */
    postAuthObtain500ApplicationJSONObject?: PostAuthObtain500ApplicationJSON;
}
