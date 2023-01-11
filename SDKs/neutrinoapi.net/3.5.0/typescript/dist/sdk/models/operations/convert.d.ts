import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConvertRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class ConvertRequestBody extends SpeakeasyBase {
    fromType: string;
    fromValue: string;
    outputCase?: ConvertRequestBodyOutputCaseEnum;
    toType: string;
}
export declare class ConvertRequest extends SpeakeasyBase {
    request?: ConvertRequestBody;
}
export declare class ConvertResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    convertResponse?: shared.ConvertResponse;
    statusCode: number;
}
