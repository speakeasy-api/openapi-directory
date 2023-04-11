import { SpeakeasyBase } from "../../../internal/utils";
export declare class SettlementTransactionTransaction extends SpeakeasyBase {
    /**
     * The time on which the event occurred in ISO 8601 format.
     */
    postDate?: string;
    /**
     * The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" - "`lumpSumCorrectionTransaction`"
     */
    type?: string;
}
