import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostEnterpriseAuthVerifyRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostEnterpriseAuthVerify500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostEnterpriseAuthVerify400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostEnterpriseAuthVerify200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostEnterpriseAuthVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postEnterpriseAuthVerify200ApplicationJSONObject?: PostEnterpriseAuthVerify200ApplicationJSON;
    /**
     * Bad Request
     */
    postEnterpriseAuthVerify400ApplicationJSONObject?: PostEnterpriseAuthVerify400ApplicationJSON;
    /**
     * Internal server error
     */
    postEnterpriseAuthVerify500ApplicationJSONObject?: PostEnterpriseAuthVerify500ApplicationJSON;
}
