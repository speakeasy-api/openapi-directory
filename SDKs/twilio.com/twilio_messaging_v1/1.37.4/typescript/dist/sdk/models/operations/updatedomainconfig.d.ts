import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDomainConfigServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateDomainConfigPathParams extends SpeakeasyBase {
    domainSid: string;
}
export declare class UpdateDomainConfigUpdateDomainConfigRequest extends SpeakeasyBase {
    callbackUrl?: string;
    fallbackUrl?: string;
    messagingServiceSids: string[];
    messagingServiceSidsAction?: string;
}
export declare class UpdateDomainConfigSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDomainConfigRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UpdateDomainConfigPathParams;
    request?: UpdateDomainConfigUpdateDomainConfigRequest;
    security: UpdateDomainConfigSecurity;
}
export declare class UpdateDomainConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1DomainConfig?: shared.MessagingV1DomainConfig;
}
