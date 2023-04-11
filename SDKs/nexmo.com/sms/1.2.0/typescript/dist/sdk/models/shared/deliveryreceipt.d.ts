import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeliveryReceipt extends SpeakeasyBase {
    /**
     * The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint.
     */
    apiKey?: string;
    /**
     * If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt
     */
    clientRef?: string;
    /**
     * The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details
     */
    errCode?: string;
    /**
     * The time when Vonage started to push this Delivery Receipt to your webhook endpoint.
     */
    messageTimestamp?: string;
    /**
     * The Vonage ID for this message.
     */
    messageId?: string;
    /**
     * The number the message was sent to. Numbers are specified in E.164 format.
     */
    msisdn?: string;
    /**
     * The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with.
     */
    networkCode?: string;
    /**
     * A random string to be used when calculating the signature. _Only included if you have signatures enabled_
     */
    nonce?: string;
    /**
     * The cost of the message
     */
    price?: string;
    /**
     * When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00`
     */
    scts?: string;
    /**
     * The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_
     */
    sig?: string;
    /**
     * A code that explains where the message is in the delivery process.
     */
    status?: string;
    /**
     * A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_
     */
    timestamp?: string;
    /**
     * The SenderID you set in `from` in your request.
     */
    to?: string;
}
