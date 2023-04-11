import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class ReturnPricingInfo extends SpeakeasyBase {
    /**
     * Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant's return policy for the items being returned.
     */
    chargeReturnShippingFee?: boolean;
    maxReturnShippingFee?: MonetaryAmount;
    refundableItemsTotalAmount?: MonetaryAmount;
    refundableShippingAmount?: MonetaryAmount;
    totalRefundedAmount?: MonetaryAmount;
}
