import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostEnterpriseAuthRevokeRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostEnterpriseAuthRevoke500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostEnterpriseAuthRevoke400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostEnterpriseAuthRevoke200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostEnterpriseAuthRevokeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postEnterpriseAuthRevoke200ApplicationJSONObject?: PostEnterpriseAuthRevoke200ApplicationJSON;
    /**
     * Bad Request
     */
    postEnterpriseAuthRevoke400ApplicationJSONObject?: PostEnterpriseAuthRevoke400ApplicationJSON;
    /**
     * Internal server error
     */
    postEnterpriseAuthRevoke500ApplicationJSONObject?: PostEnterpriseAuthRevoke500ApplicationJSON;
}
