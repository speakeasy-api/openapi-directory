import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteLinkshorteningMessagingServiceServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteLinkshorteningMessagingServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteLinkshorteningMessagingServiceRequest extends SpeakeasyBase {
    /**
     * The domain SID to dissociate from a messaging service. With URL shortening enabled, links in messages sent with the associated messaging service will be shortened to the provided domain
     */
    domainSid: string;
    /**
     * A messaging service SID to dissociate from a domain. With URL shortening enabled, links in messages sent with the provided messaging service will be shortened to the associated domain
     */
    messagingServiceSid: string;
}
export declare class DeleteLinkshorteningMessagingServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
