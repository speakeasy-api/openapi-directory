import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthRevokeRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostAuthRevoke500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostAuthRevoke400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostAuthRevoke200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostAuthRevokeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postAuthRevoke200ApplicationJSONObject?: PostAuthRevoke200ApplicationJSON;
    /**
     * Bad Request
     */
    postAuthRevoke400ApplicationJSONObject?: PostAuthRevoke400ApplicationJSON;
    /**
     * Internal server error
     */
    postAuthRevoke500ApplicationJSONObject?: PostAuthRevoke500ApplicationJSON;
}
