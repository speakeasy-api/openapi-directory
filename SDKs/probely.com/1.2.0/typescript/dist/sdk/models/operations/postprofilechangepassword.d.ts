import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostProfileChangePasswordRequestBody extends SpeakeasyBase {
    confpassword: string;
    currentPassword: string;
    password: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostProfileChangePassword401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostProfileChangePassword400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
/**
 * Success
 */
export declare class PostProfileChangePassword200ApplicationJSON extends SpeakeasyBase {
    /**
     * Message
     */
    message?: string;
}
export declare class PostProfileChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postProfileChangePassword200ApplicationJSONObject?: PostProfileChangePassword200ApplicationJSON;
    /**
     * Bad Request
     */
    postProfileChangePassword400ApplicationJSONObject?: PostProfileChangePassword400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postProfileChangePassword401ApplicationJSONObject?: PostProfileChangePassword401ApplicationJSON;
}
