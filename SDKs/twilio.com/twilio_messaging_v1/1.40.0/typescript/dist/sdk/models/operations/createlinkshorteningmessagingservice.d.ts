import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateLinkshorteningMessagingServiceServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateLinkshorteningMessagingServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateLinkshorteningMessagingServiceRequest extends SpeakeasyBase {
    /**
     * The domain SID to associate with a messaging service. With URL shortening enabled, links in messages sent with the associated messaging service will be shortened to the provided domain
     */
    domainSid: string;
    /**
     * A messaging service SID to associate with a domain. With URL shortening enabled, links in messages sent with the provided messaging service will be shortened to the associated domain
     */
    messagingServiceSid: string;
}
export declare class CreateLinkshorteningMessagingServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1LinkshorteningMessagingService?: shared.MessagingV1LinkshorteningMessagingService;
}
