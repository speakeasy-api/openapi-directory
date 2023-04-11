import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDomainConfigServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateDomainConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDomainConfigUpdateDomainConfigRequest extends SpeakeasyBase {
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened links
     */
    callbackUrl?: string;
    /**
     * Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
     */
    fallbackUrl?: string;
    /**
     * A list of messagingServiceSids (with prefix MG)
     */
    messagingServiceSids: string[];
    /**
     * An action type for messaging_service_sids operation (ADD, DELETE, REPLACE)
     */
    messagingServiceSidsAction?: string;
}
export declare class UpdateDomainConfigRequest extends SpeakeasyBase {
    /**
     * Unique string used to identify the domain that this config should be associated with.
     */
    domainSid: string;
    requestBody?: UpdateDomainConfigUpdateDomainConfigRequest;
}
export declare class UpdateDomainConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1DomainConfig?: shared.MessagingV1DomainConfig;
}
