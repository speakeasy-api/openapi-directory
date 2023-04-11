import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipAuthCallsIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that contains the resource to fetch.
     */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to fetch.
     */
    sid: string;
}
export declare class FetchSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping;
}
