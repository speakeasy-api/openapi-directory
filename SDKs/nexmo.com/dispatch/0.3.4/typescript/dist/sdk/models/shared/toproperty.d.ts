import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ToPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}
export declare class ToProperty extends SpeakeasyBase {
    id?: string;
    number?: string;
    type: ToPropertyTypeEnum;
}
