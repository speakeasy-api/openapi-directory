import { SpeakeasyBase } from "../../../internal/utils";
import { CollectOnDeliveryPaymentTypeEnum } from "./collectondeliverypaymenttypeenum";
import { PaymentAmount } from "./paymentamount";
/**
 * Defer payment until package is delivered, instead of when it is ordered.
 */
export declare class CollectOnDelivery extends SpeakeasyBase {
    paymentAmount?: PaymentAmount;
    paymentType?: CollectOnDeliveryPaymentTypeEnum;
}
