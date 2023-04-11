import { SpeakeasyBase } from "../../../internal/utils";
export declare class Message extends SpeakeasyBase {
    /**
     * **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)
     */
    accountRef?: string;
    /**
     * If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent.
     */
    clientRef?: string;
    /**
     * The ID of the message
     */
    messageId?: string;
    /**
     * The estimated cost of the message
     */
    messagePrice?: string;
    /**
     * The estimated ID of the network of the recipient
     */
    network?: string;
    /**
     * Your estimated remaining balance
     */
    remainingBalance?: string;
    /**
     * The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms).
     */
    status?: string;
    /**
     * The number the message was sent to. Numbers are specified in E.164 format.
     */
    to?: string;
}
