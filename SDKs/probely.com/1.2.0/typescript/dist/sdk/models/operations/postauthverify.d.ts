import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthVerifyRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostAuthVerify500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostAuthVerify400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostAuthVerify200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostAuthVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postAuthVerify200ApplicationJSONObject?: PostAuthVerify200ApplicationJSON;
    /**
     * Bad Request
     */
    postAuthVerify400ApplicationJSONObject?: PostAuthVerify400ApplicationJSON;
    /**
     * Internal server error
     */
    postAuthVerify500ApplicationJSONObject?: PostAuthVerify500ApplicationJSON;
}
