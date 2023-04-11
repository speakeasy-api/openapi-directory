import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **Advanced**: The Data Coding Scheme value of the message
 */
export declare enum NewMessageMessageClassEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * **Advanced**: The format of the message body
 */
export declare enum NewMessageTypeEnum {
    Text = "text",
    Binary = "binary",
    Unicode = "unicode"
}
export declare class NewMessage extends SpeakeasyBase {
    /**
     * **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)
     */
    accountRef?: string;
    /**
     * Your API key
     */
    apiKey: string;
    /**
     * Your API secret. Required unless `sig` is provided
     */
    apiSecret?: string;
    /**
     * **Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.
     */
    body?: string;
    /**
     * **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters.
     */
    callback?: string;
    /**
     * **Advanced**: You can optionally include your own reference of up to 100 characters.
     */
    clientRef?: string;
    /**
     * **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)
     */
    contentId?: string;
    /**
     * **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)
     */
    entityId?: string;
    /**
     * The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.
     */
    from: string;
    /**
     * **Advanced**: The Data Coding Scheme value of the message
     */
    messageClass?: NewMessageMessageClassEnum;
    /**
     * **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.
     */
    protocolId?: number;
    /**
     * The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.
     */
    sig?: string;
    /**
     * **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).
     */
    statusReportReq?: boolean;
    /**
     * The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.
     */
    text?: string;
    /**
     * The number that the message should be sent to. Numbers are specified in E.164 format.
     */
    to: string;
    /**
     * **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
     */
    ttl?: number;
    /**
     * **Advanced**: The format of the message body
     */
    type?: NewMessageTypeEnum;
    /**
     * **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.
     */
    udh?: string;
}
