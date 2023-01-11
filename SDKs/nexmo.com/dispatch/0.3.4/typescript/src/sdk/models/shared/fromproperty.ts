import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FromPropertyTypeEnum {
    Sms = "sms",
    ViberServiceMsg = "viber_service_msg",
    Messenger = "messenger",
    Whatsapp = "whatsapp"
}


export class FromProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FromPropertyTypeEnum;
}
