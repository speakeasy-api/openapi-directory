import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ToPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}


export class ToProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ToPropertyTypeEnum;
}
