import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersCustomBatchRequestEntryRejectReturnLineItem extends SpeakeasyBase {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The quantity to return and refund.
     */
    quantity?: number;
    /**
     * The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
}
