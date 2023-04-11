import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipAuthRegistrationsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that contains the resource to fetch.
     */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the CredentialListMapping resource to fetch.
     */
    sid: string;
}
export declare class FetchSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping;
}
