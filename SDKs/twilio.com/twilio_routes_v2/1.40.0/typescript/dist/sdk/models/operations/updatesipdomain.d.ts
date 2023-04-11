import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipDomainServerList: readonly ["https://routes.twilio.com"];
export declare class UpdateSipDomainSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
    friendlyName?: string;
    voiceRegion?: string;
}
export declare class UpdateSipDomainRequest extends SpeakeasyBase {
    requestBody?: UpdateSipDomainUpdateSipDomainRequest;
    sipDomain: string;
}
export declare class UpdateSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    routesV2SipDomain?: shared.RoutesV2SipDomain;
}
