import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDomainCertV4PathParams extends SpeakeasyBase {
    domainSid: string;
}
export declare class FetchDomainCertV4Security extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDomainCertV4Request extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchDomainCertV4PathParams;
    security: FetchDomainCertV4Security;
}
export declare class FetchDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1DomainCertV4?: shared.MessagingV1DomainCertV4;
}
