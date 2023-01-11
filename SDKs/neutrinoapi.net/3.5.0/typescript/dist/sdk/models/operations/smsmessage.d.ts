import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SmsMessageRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class SmsMessageRequestBody extends SpeakeasyBase {
    countryCode?: string;
    limit?: number;
    limitTtl?: number;
    message: string;
    number: string;
    outputCase?: SmsMessageRequestBodyOutputCaseEnum;
}
export declare class SmsMessageRequest extends SpeakeasyBase {
    request?: SmsMessageRequestBody;
}
export declare class SmsMessageResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    smsMessageResponse?: shared.SmsMessageResponse;
    statusCode: number;
}
