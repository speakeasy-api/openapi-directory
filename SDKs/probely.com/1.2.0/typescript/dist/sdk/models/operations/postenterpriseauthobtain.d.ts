import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class PostEnterpriseAuthObtain500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostEnterpriseAuthObtain400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Token and respective time to live
 */
export declare class PostEnterpriseAuthObtain200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authentication token
     */
    token?: string;
    /**
     * Token time to live in seconds
     */
    ttl?: number;
}
export declare class PostEnterpriseAuthObtainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token and respective time to live
     */
    postEnterpriseAuthObtain200ApplicationJSONObject?: PostEnterpriseAuthObtain200ApplicationJSON;
    /**
     * Bad Request
     */
    postEnterpriseAuthObtain400ApplicationJSONObject?: PostEnterpriseAuthObtain400ApplicationJSON;
    /**
     * Internal server error
     */
    postEnterpriseAuthObtain500ApplicationJSONObject?: PostEnterpriseAuthObtain500ApplicationJSON;
}
