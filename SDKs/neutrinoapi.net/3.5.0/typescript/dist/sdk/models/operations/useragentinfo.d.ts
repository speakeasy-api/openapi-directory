import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UserAgentInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class UserAgentInfoRequestBody extends SpeakeasyBase {
    outputCase?: UserAgentInfoRequestBodyOutputCaseEnum;
    userAgent: string;
}
export declare class UserAgentInfoRequest extends SpeakeasyBase {
    request?: UserAgentInfoRequestBody;
}
export declare class UserAgentInfoResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    userAgentInfoResponse?: shared.UserAgentInfoResponse;
}
