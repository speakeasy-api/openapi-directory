import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipDomainServerList: readonly ["https://routes.twilio.com"];
export declare class FetchSipDomainSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipDomainRequest extends SpeakeasyBase {
    sipDomain: string;
}
export declare class FetchSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    routesV2SipDomain?: shared.RoutesV2SipDomain;
}
