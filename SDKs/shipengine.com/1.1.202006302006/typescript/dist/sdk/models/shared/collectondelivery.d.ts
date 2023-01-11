import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentAmount } from "./paymentamount";
import { CollectOnDeliveryPaymentTypeEnum } from "./collectondeliverypaymenttypeenum";
/**
 * Defer payment until package is delivered, instead of when it is ordered.
**/
export declare class CollectOnDelivery extends SpeakeasyBase {
    paymentAmount?: PaymentAmount;
    paymentType?: CollectOnDeliveryPaymentTypeEnum;
}
