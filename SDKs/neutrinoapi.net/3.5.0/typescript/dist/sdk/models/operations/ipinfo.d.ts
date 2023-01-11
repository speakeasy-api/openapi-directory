import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IpInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class IpInfoRequestBody extends SpeakeasyBase {
    ip: string;
    outputCase?: IpInfoRequestBodyOutputCaseEnum;
    reverseLookup?: boolean;
}
export declare class IpInfoRequest extends SpeakeasyBase {
    request?: IpInfoRequestBody;
}
export declare class IpInfoResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    ipInfoResponse?: shared.IpInfoResponse;
    statusCode: number;
}
