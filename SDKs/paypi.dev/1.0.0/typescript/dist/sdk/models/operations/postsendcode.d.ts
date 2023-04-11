import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSendCodeRequestBody extends SpeakeasyBase {
    email?: string;
}
/**
 * Invalid API key
 */
export declare class PostSendCode401ApplicationJSON extends SpeakeasyBase {
    message?: string;
    success?: boolean;
}
/**
 * Invalid or incorrectly formatted email given
 */
export declare class PostSendCode400ApplicationJSON extends SpeakeasyBase {
    message?: boolean;
    success?: boolean;
}
/**
 * Success - Email sent
 */
export declare class PostSendCode200ApplicationJSON extends SpeakeasyBase {
    message?: boolean;
    success?: boolean;
}
export declare class PostSendCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success - Email sent
     */
    postSendCode200ApplicationJSONObject?: PostSendCode200ApplicationJSON;
    /**
     * Invalid or incorrectly formatted email given
     */
    postSendCode400ApplicationJSONObject?: PostSendCode400ApplicationJSON;
    /**
     * Invalid API key
     */
    postSendCode401ApplicationJSONObject?: PostSendCode401ApplicationJSON;
}
