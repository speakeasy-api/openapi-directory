import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCheckCodeRequestBody extends SpeakeasyBase {
    code?: string;
    email?: string;
}
/**
 * #### Tries for this email exceeded.
 *
 * @remarks
 * To prevent abuse and brute forcing, we limit the number of checkCode requests for each email address to 20. \
 * This means if more than 20 requests are made you will have to send another code to your user, this will reset the limit.
 *
 */
export declare class PostCheckCode403ApplicationJSON extends SpeakeasyBase {
    message?: string;
    success?: boolean;
}
/**
 * #### Invalid API key
 *
 * @remarks
 *
 */
export declare class PostCheckCode401ApplicationJSON extends SpeakeasyBase {
    message?: string;
    success?: boolean;
}
/**
 * If success is true, the user has given the correct code. If not the code is incorrect. \
 *
 * @remarks
 * Check the message for more information
 *
 */
export declare class PostCheckCode200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    success?: boolean;
}
export declare class PostCheckCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If success is true, the user has given the correct code. If not the code is incorrect. \
     *
     * @remarks
     * Check the message for more information
     *
     */
    postCheckCode200ApplicationJSONObject?: PostCheckCode200ApplicationJSON;
    /**
     * #### Invalid API key
     *
     * @remarks
     *
     */
    postCheckCode401ApplicationJSONObject?: PostCheckCode401ApplicationJSON;
    /**
     * #### Tries for this email exceeded.
     *
     * @remarks
     * To prevent abuse and brute forcing, we limit the number of checkCode requests for each email address to 20. \
     * This means if more than 20 requests are made you will have to send another code to your user, this will reset the limit.
     *
     */
    postCheckCode403ApplicationJSONObject?: PostCheckCode403ApplicationJSON;
}
