import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PhoneValidateRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class PhoneValidateRequestBody extends SpeakeasyBase {
    countryCode?: string;
    ip?: string;
    number: string;
    outputCase?: PhoneValidateRequestBodyOutputCaseEnum;
}
export declare class PhoneValidateRequest extends SpeakeasyBase {
    request?: PhoneValidateRequestBody;
}
export declare class PhoneValidateResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    phoneValidateResponse?: shared.PhoneValidateResponse;
    statusCode: number;
}
