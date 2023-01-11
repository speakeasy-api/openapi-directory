import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateDomainCertV4PathParams extends SpeakeasyBase {
    domainSid: string;
}
export declare class UpdateDomainCertV4UpdateDomainCertV4Request extends SpeakeasyBase {
    tlsCert: string;
}
export declare class UpdateDomainCertV4Security extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDomainCertV4Request extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UpdateDomainCertV4PathParams;
    request?: UpdateDomainCertV4UpdateDomainCertV4Request;
    security: UpdateDomainCertV4Security;
}
export declare class UpdateDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1DomainCertV4?: shared.MessagingV1DomainCertV4;
}
