import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Price } from "./price";
import { ProductAmount } from "./productamount";
export declare class OrderReportTransaction extends SpeakeasyBase {
    disbursementAmount?: Price;
    /**
     * The date the disbursement was created, in ISO 8601 format.
     */
    disbursementCreationDate?: string;
    /**
     * The date the disbursement was initiated, in ISO 8601 format.
     */
    disbursementDate?: string;
    /**
     * The ID of the disbursement.
     */
    disbursementId?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * Merchant-provided ID of the order.
     */
    merchantOrderId?: string;
    /**
     * The ID of the order.
     */
    orderId?: string;
    productAmount?: Amount;
    productAmountWithRemittedTax?: ProductAmount;
    /**
     * The date of the transaction, in ISO 8601 format.
     */
    transactionDate?: string;
}
