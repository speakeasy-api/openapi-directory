import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SmsVerifyRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class SmsVerifyRequestBody extends SpeakeasyBase {
    codeLength?: number;
    countryCode?: string;
    languageCode?: string;
    limit?: number;
    limitTtl?: number;
    number: string;
    outputCase?: SmsVerifyRequestBodyOutputCaseEnum;
    securityCode?: number;
}
export declare class SmsVerifyRequest extends SpeakeasyBase {
    request?: SmsVerifyRequestBody;
}
export declare class SmsVerifyResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    smsVerifyResponse?: shared.SmsVerifyResponse;
    statusCode: number;
}
