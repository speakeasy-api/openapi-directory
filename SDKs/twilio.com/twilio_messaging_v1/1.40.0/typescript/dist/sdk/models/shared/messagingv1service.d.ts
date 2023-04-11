import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumScanMessageContentEnum } from "./serviceenumscanmessagecontentenum";
/**
 * The HTTP method we use to call `fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum MessagingV1ServiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `inbound_request_url`. Can be `GET` or `POST`.
 */
export declare enum MessagingV1ServiceInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Created
 */
export declare class MessagingV1Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
     */
    areaCodeGeomatch?: boolean;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The HTTP method we use to call `fallback_url`. Can be: `GET` or `POST`.
     */
    fallbackMethod?: MessagingV1ServiceFallbackMethodEnum;
    /**
     * Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
     */
    fallbackToLongCode?: boolean;
    /**
     * The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
     */
    fallbackUrl?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The HTTP method we use to call `inbound_request_url`. Can be `GET` or `POST`.
     */
    inboundMethod?: MessagingV1ServiceInboundMethodEnum;
    /**
     * The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
     */
    inboundRequestUrl?: string;
    /**
     * The absolute URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
     */
    mmsConverter?: boolean;
    scanMessageContent?: ServiceEnumScanMessageContentEnum;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
     */
    smartEncoding?: boolean;
    /**
     * The URL we call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
     */
    statusCallback?: string;
    /**
     * Whether to enable [Sticky Sender](https://www.twilio.com/docs/sms/services#sticky-sender) on the Service instance.
     */
    stickySender?: boolean;
    /**
     * Reserved.
     */
    synchronousValidation?: boolean;
    /**
     * The absolute URL of the Service resource.
     */
    url?: string;
    /**
     * Whether US A2P campaign is registered for this Service.
     */
    usAppToPersonRegistered?: boolean;
    /**
     * A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
     */
    useInboundWebhookOnNumber?: boolean;
    /**
     * A string that describes the scenario in which the Messaging Service will be used. Examples: [notification, marketing, verification, poll ..]
     */
    usecase?: string;
    /**
     * How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `14,400`.
     */
    validityPeriod?: number;
}
