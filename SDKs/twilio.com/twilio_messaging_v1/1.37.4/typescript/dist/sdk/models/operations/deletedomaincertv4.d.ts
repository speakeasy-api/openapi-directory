import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDomainCertV4ServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteDomainCertV4PathParams extends SpeakeasyBase {
    domainSid: string;
}
export declare class DeleteDomainCertV4Security extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDomainCertV4Request extends SpeakeasyBase {
    serverURL?: string;
    pathParams: DeleteDomainCertV4PathParams;
    security: DeleteDomainCertV4Security;
}
export declare class DeleteDomainCertV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
