import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDomainConfigServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDomainConfigPathParams extends SpeakeasyBase {
    domainSid: string;
}
export declare class FetchDomainConfigSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDomainConfigRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchDomainConfigPathParams;
    security: FetchDomainConfigSecurity;
}
export declare class FetchDomainConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1DomainConfig?: shared.MessagingV1DomainConfig;
}
