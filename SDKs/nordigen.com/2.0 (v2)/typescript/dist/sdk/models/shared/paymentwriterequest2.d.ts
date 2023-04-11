import { SpeakeasyBase } from "../../../internal/utils";
import { InstructedAmountRequest } from "./instructedamountrequest";
import { PeriodicPaymentRequest } from "./periodicpaymentrequest";
/**
 * PaymentWriteSerializer.
 */
export declare class PaymentWriteRequest2 extends SpeakeasyBase {
    /**
     * Registered creditor account
     */
    creditorAccount: string;
    /**
     * Payment Custom Payment ID
     */
    customPaymentId?: string;
    /**
     * Debtor account
     */
    debtorAccount?: any;
    /**
     * Payment description
     */
    description?: string;
    /**
     * Institution ID for Payment
     */
    institutionId?: string;
    /**
     * Instructed amount
     */
    instructedAmount: InstructedAmountRequest;
    /**
     * Payment product
     */
    paymentProduct?: any;
    /**
     * Periodic Payment Serializer.
     */
    periodicPayment?: PeriodicPaymentRequest;
    /**
     * Redirect URL to your application after payment is done
     */
    redirect: string;
    /**
     * Payment Execution date (for periodic payments)
     */
    requestedExecutionDate?: Date;
}
