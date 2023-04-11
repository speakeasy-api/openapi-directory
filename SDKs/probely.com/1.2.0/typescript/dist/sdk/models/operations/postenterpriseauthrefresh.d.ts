import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostEnterpriseAuthRefreshRequestBody extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
}
/**
 * Internal server error
 */
export declare class PostEnterpriseAuthRefresh500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostEnterpriseAuthRefresh400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostEnterpriseAuthRefresh200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostEnterpriseAuthRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postEnterpriseAuthRefresh200ApplicationJSONObject?: PostEnterpriseAuthRefresh200ApplicationJSON;
    /**
     * Bad Request
     */
    postEnterpriseAuthRefresh400ApplicationJSONObject?: PostEnterpriseAuthRefresh400ApplicationJSON;
    /**
     * Internal server error
     */
    postEnterpriseAuthRefresh500ApplicationJSONObject?: PostEnterpriseAuthRefresh500ApplicationJSON;
}
