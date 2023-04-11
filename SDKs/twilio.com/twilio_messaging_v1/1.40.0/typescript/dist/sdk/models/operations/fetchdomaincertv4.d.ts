import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDomainCertV4Security extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDomainCertV4Request extends SpeakeasyBase {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
}
export declare class FetchDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1DomainCertV4?: shared.MessagingV1DomainCertV4;
}
