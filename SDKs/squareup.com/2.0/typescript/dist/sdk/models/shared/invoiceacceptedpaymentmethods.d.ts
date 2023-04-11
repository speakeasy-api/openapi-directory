import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payment methods that customers can use to pay an invoice on the Square-hosted invoice page.
 */
export declare class InvoiceAcceptedPaymentMethods extends SpeakeasyBase {
    /**
     * Indicates whether bank transfer payments are accepted. The default value is `false`.
     *
     * @remarks
     *
     * This option is allowed only for invoices that have a single payment request of type `BALANCE`.
     */
    bankAccount?: boolean;
    /**
     * Indicates whether credit card or debit card payments are accepted. The default value is `false`.
     */
    card?: boolean;
    /**
     * Indicates whether Square gift card payments are accepted. The default value is `false`.
     */
    squareGiftCard?: boolean;
}
