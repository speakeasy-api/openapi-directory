import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAmount } from "./paymentamount";
import { CollectOnDeliveryPaymentTypeEnum } from "./collectondeliverypaymenttypeenum";



// CollectOnDelivery
/** 
 * Defer payment until package is delivered, instead of when it is ordered.
**/
export class CollectOnDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payment_amount" })
  paymentAmount?: PaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=payment_type" })
  paymentType?: CollectOnDeliveryPaymentTypeEnum;
}
