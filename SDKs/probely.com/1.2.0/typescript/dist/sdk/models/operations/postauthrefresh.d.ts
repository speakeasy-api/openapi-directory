import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthRefreshRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostAuthRefresh500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostAuthRefresh400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostAuthRefresh200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostAuthRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postAuthRefresh200ApplicationJSONObject?: PostAuthRefresh200ApplicationJSON;
    /**
     * Bad Request
     */
    postAuthRefresh400ApplicationJSONObject?: PostAuthRefresh400ApplicationJSON;
    /**
     * Internal server error
     */
    postAuthRefresh500ApplicationJSONObject?: PostAuthRefresh500ApplicationJSON;
}
