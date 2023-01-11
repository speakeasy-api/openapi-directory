import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreditCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bin" })
  bin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=payment_code" })
  paymentCode?: string;
}
