import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VerifySecurityCodeRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class VerifySecurityCodeRequestBody extends SpeakeasyBase {
    limitBy?: string;
    outputCase?: VerifySecurityCodeRequestBodyOutputCaseEnum;
    securityCode: string;
}
export declare class VerifySecurityCodeRequest extends SpeakeasyBase {
    request?: VerifySecurityCodeRequestBody;
}
export declare class VerifySecurityCodeResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    verifySecurityCodeResponse?: shared.VerifySecurityCodeResponse;
}
