import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP domain.
     */
    domainSid: string;
    /**
     * A 34 character string that uniquely identifies the resource to fetch.
     */
    sid: string;
}
export declare class FetchSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}
