import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MessagingV1DomainConfigMessagingService extends SpeakeasyBase {
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened links.
     */
    callbackUrl?: string;
    /**
     * The unique string that we created to identify the Domain config (prefix ZK).
     */
    configSid?: string;
    /**
     * Date this Domain Config was created.
     */
    dateCreated?: Date;
    /**
     * Date that this Domain Config was last updated.
     */
    dateUpdated?: Date;
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid?: string;
    /**
     * Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
     */
    fallbackUrl?: string;
    /**
     * The unique string that identifies the messaging service
     */
    messagingServiceSid?: string;
    url?: string;
}
