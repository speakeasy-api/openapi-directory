import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDomainConfigServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDomainConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDomainConfigRequest extends SpeakeasyBase {
    /**
     * Unique string used to identify the domain that this config should be associated with.
     */
    domainSid: string;
}
export declare class FetchDomainConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1DomainConfig?: shared.MessagingV1DomainConfig;
}
