import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BadWordFilterRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class BadWordFilterRequestBody extends SpeakeasyBase {
    catalog?: string;
    censorCharacter?: string;
    content: string;
    outputCase?: BadWordFilterRequestBodyOutputCaseEnum;
}
export declare class BadWordFilterRequest extends SpeakeasyBase {
    request?: BadWordFilterRequestBody;
}
export declare class BadWordFilterResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    badWordFilterResponse?: shared.BadWordFilterResponse;
    contentType: string;
    statusCode: number;
}
