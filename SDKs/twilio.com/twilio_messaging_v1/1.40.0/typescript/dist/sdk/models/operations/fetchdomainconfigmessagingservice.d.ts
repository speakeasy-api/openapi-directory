import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDomainConfigMessagingServiceServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchDomainConfigMessagingServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDomainConfigMessagingServiceRequest extends SpeakeasyBase {
    /**
     * Unique string used to identify the Messaging service that this domain should be associated with.
     */
    messagingServiceSid: string;
}
export declare class FetchDomainConfigMessagingServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1DomainConfigMessagingService?: shared.MessagingV1DomainConfigMessagingService;
}
