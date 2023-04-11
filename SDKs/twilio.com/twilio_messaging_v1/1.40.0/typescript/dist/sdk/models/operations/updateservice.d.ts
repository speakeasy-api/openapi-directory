import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateServiceUpdateServiceRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
 */
export declare enum UpdateServiceUpdateServiceRequestInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
     */
    areaCodeGeomatch?: boolean;
    /**
     * The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
     */
    fallbackMethod?: UpdateServiceUpdateServiceRequestFallbackMethodEnum;
    /**
     * Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
     */
    fallbackToLongCode?: boolean;
    /**
     * The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
     */
    fallbackUrl?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
     */
    inboundMethod?: UpdateServiceUpdateServiceRequestInboundMethodEnum;
    /**
     * The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
     */
    inboundRequestUrl?: string;
    /**
     * Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
     */
    mmsConverter?: boolean;
    scanMessageContent?: shared.ServiceEnumScanMessageContentEnum;
    /**
     * Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
     */
    smartEncoding?: boolean;
    /**
     * The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
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
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The SID of the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1Service?: shared.MessagingV1Service;
}
