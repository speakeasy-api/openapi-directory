import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IpProbeRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class IpProbeRequestBody extends SpeakeasyBase {
    ip: string;
    outputCase?: IpProbeRequestBodyOutputCaseEnum;
}
export declare class IpProbeRequest extends SpeakeasyBase {
    request?: IpProbeRequestBody;
}
export declare class IpProbeResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    ipProbeResponse?: shared.IpProbeResponse;
    statusCode: number;
}
