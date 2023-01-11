import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum HlrLookupRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class HlrLookupRequestBody extends SpeakeasyBase {
    countryCode?: string;
    number: string;
    outputCase?: HlrLookupRequestBodyOutputCaseEnum;
}
export declare class HlrLookupRequest extends SpeakeasyBase {
    request?: HlrLookupRequestBody;
}
export declare class HlrLookupResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    hlrLookupResponse?: shared.HlrLookupResponse;
    statusCode: number;
}
