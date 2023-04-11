import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption extends SpeakeasyBase {
    /**
     * Optional description of the return reason.
     */
    description?: string;
    /**
     * [required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
     */
    reason?: string;
}
