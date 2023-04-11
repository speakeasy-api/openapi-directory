import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of message that you want to send.
 */
export declare enum ToPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}
export declare class ToProperty extends SpeakeasyBase {
    /**
     * The ID of the message recipient.
     *
     * @remarks
     *
     * **Messenger**: This value should be the `from.id` value you received in the inbound messenger event.
     *
     * **SMS**: or **Viber**: or **WhatsApp** This value is not required.
     *
     */
    id?: string;
    /**
     * **SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
     *
     * @remarks
     *
     * **Messenger**: This value is not required.
     *
     */
    number?: string;
    /**
     * The type of message that you want to send.
     */
    type: ToPropertyTypeEnum;
}
