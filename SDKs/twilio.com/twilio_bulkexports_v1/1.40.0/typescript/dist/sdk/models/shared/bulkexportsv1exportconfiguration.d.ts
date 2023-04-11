import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class BulkexportsV1ExportConfiguration extends SpeakeasyBase {
    /**
     * If true, Twilio will automatically generate every day's file when the day is over.
     */
    enabled?: boolean;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
    /**
     * Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url
     */
    webhookMethod?: string;
    /**
     * Stores the URL destination for the method specified in webhook_method.
     */
    webhookUrl?: string;
}
