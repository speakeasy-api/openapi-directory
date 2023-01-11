import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FromPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}
export declare class FromProperty extends SpeakeasyBase {
    id?: string;
    number?: string;
    type: FromPropertyTypeEnum;
}
