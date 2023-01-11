import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UrlInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class UrlInfoRequestBody extends SpeakeasyBase {
    fetchContent?: boolean;
    ignoreCertificateErrors?: boolean;
    outputCase?: UrlInfoRequestBodyOutputCaseEnum;
    retry?: number;
    timeout?: number;
    url: string;
}
export declare class UrlInfoRequest extends SpeakeasyBase {
    request?: UrlInfoRequestBody;
}
export declare class UrlInfoResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    urlInfoResponse?: shared.UrlInfoResponse;
}
