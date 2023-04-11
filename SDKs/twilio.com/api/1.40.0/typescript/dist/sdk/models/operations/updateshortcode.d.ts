import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateShortCodeServerList: readonly ["https://api.twilio.com"];
export declare class UpdateShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64 characters long. By default, the `FriendlyName` is the short code.
     */
    friendlyName?: string;
    /**
     * The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;
    /**
     * The URL that we should call if an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;
    /**
     * The URL we should call when receiving an incoming SMS message to this short code.
     */
    smsUrl?: string;
}
export declare class UpdateShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to update.
     */
    accountSid: string;
    requestBody?: UpdateShortCodeUpdateShortCodeRequest;
    /**
     * The Twilio-provided string that uniquely identifies the ShortCode resource to update
     */
    sid: string;
}
export declare class UpdateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountShortCode?: shared.ApiV2010AccountShortCode;
}
