import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PhoneVerifyRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class PhoneVerifyRequestBody extends SpeakeasyBase {
    codeLength?: number;
    countryCode?: string;
    languageCode?: string;
    limit?: number;
    limitTtl?: number;
    number: string;
    outputCase?: PhoneVerifyRequestBodyOutputCaseEnum;
    playbackDelay?: number;
    securityCode?: number;
}
export declare class PhoneVerifyRequest extends SpeakeasyBase {
    request?: PhoneVerifyRequestBody;
}
export declare class PhoneVerifyResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    phoneVerifyResponse?: shared.PhoneVerifyResponse;
    statusCode: number;
}
