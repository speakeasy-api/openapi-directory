import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EmailValidateRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class EmailValidateRequestBody extends SpeakeasyBase {
    email: string;
    fixTypos?: boolean;
    outputCase?: EmailValidateRequestBodyOutputCaseEnum;
}
export declare class EmailValidateRequest extends SpeakeasyBase {
    request?: EmailValidateRequestBody;
}
export declare class EmailValidateResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    emailValidateResponse?: shared.EmailValidateResponse;
    statusCode: number;
}
