import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum HostReputationRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class HostReputationRequestBody extends SpeakeasyBase {
    host: string;
    listRating?: number;
    outputCase?: HostReputationRequestBodyOutputCaseEnum;
}
export declare class HostReputationRequest extends SpeakeasyBase {
    request?: HostReputationRequestBody;
}
export declare class HostReputationResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    hostReputationResponse?: shared.HostReputationResponse;
    statusCode: number;
}
