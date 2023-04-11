import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of message that you want to send.
 */
export declare enum FromPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}
export declare class FromProperty extends SpeakeasyBase {
    /**
     * Your ID for the platform that you are sending from.
     *
     * @remarks
     *
     * **Messenger**: This value should be the `to.id` value you received in the inbound messenger event.
     *
     * **Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
     *
     * **SMS**: **MMS**: or **WhatsApp** This value is not required.
     *
     */
    id?: string;
    /**
     * **SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.
     *
     * @remarks
     *
     * **WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
     *
     * **Messenger**: or **Viber**: This value is not required.
     *
     */
    number?: string;
    /**
     * The type of message that you want to send.
     */
    type: FromPropertyTypeEnum;
}
