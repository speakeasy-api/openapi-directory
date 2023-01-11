import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IpBlocklistRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class IpBlocklistRequestBody extends SpeakeasyBase {
    ip: string;
    outputCase?: IpBlocklistRequestBodyOutputCaseEnum;
    vpnLookup?: boolean;
}
export declare class IpBlocklistRequest extends SpeakeasyBase {
    request?: IpBlocklistRequestBody;
}
export declare class IpBlocklistResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    ipBlocklistResponse?: shared.IpBlocklistResponse;
    statusCode: number;
}
