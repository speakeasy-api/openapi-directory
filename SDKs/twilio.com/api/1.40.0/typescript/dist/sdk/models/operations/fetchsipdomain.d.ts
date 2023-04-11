import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipDomainSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipDomainRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the SipDomain resource to fetch.
     */
    sid: string;
}
export declare class FetchSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
