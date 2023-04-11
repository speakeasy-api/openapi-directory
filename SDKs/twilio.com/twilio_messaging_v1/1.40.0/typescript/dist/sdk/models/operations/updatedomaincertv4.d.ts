import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateDomainCertV4Security extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDomainCertV4UpdateDomainCertV4Request extends SpeakeasyBase {
    /**
     * Contains the full TLS certificate and private for this domain in PEM format: https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail. Twilio uses this information to process HTTPS traffic sent to your domain.
     */
    tlsCert: string;
}
export declare class UpdateDomainCertV4Request extends SpeakeasyBase {
    /**
     * Unique string used to identify the domain that this certificate should be associated with.
     */
    domainSid: string;
    requestBody?: UpdateDomainCertV4UpdateDomainCertV4Request;
}
export declare class UpdateDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1DomainCertV4?: shared.MessagingV1DomainCertV4;
}
