import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EmailVerifyRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class EmailVerifyRequestBody extends SpeakeasyBase {
    email: string;
    fixTypos?: boolean;
    outputCase?: EmailVerifyRequestBodyOutputCaseEnum;
}
export declare class EmailVerifyRequest extends SpeakeasyBase {
    request?: EmailVerifyRequestBody;
}
export declare class EmailVerifyResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    emailVerifyResponse?: shared.EmailVerifyResponse;
    statusCode: number;
}
