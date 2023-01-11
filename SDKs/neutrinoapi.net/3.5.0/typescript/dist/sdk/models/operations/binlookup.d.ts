import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BinLookupRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class BinLookupRequestBody extends SpeakeasyBase {
    binNumber: string;
    customerIp?: string;
    outputCase?: BinLookupRequestBodyOutputCaseEnum;
}
export declare class BinLookupRequest extends SpeakeasyBase {
    request?: BinLookupRequestBody;
}
export declare class BinLookupResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    binLookupResponse?: shared.BinLookupResponse;
    contentType: string;
    statusCode: number;
}
