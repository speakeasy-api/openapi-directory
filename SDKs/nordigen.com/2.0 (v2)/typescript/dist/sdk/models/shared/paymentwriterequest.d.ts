import { SpeakeasyBase } from "../../../internal/utils";
import { InstructedAmountRequest } from "./instructedamountrequest";
import { PeriodicPaymentRequest } from "./periodicpaymentrequest";
/**
 * Debtor account type
 */
export declare enum PaymentWriteRequestDebtorAccountTypeEnum {
    Iban = "IBAN",
    Scan = "SCAN"
}
/**
 * Debtor account write serializer.
 */
export declare class PaymentWriteRequestDebtorAccount extends SpeakeasyBase {
    /**
     * Debtor account type identifier
     */
    account?: string;
    /**
     * Debtor account address country
     */
    addressCountry?: string;
    /**
     * Debtor account address street
     */
    addressStreet?: string;
    /**
     * Debtor account currency
     */
    currency?: string;
    /**
     * Debtor account name
     */
    name: string;
    /**
     * Debtor account post code
     */
    postCode?: string;
    /**
     * Debtor account type
     */
    type?: PaymentWriteRequestDebtorAccountTypeEnum;
    /**
     * Debtor account type identifier
     */
    typeNumber?: string;
}
/**
 * Payment product
 */
export declare enum PaymentWriteRequestPaymentProductEnum {
    T2P = "T2P",
    Sct = "SCT",
    Isct = "ISCT",
    Cbct = "CBCT"
}
/**
 * PaymentWriteSerializer.
 */
export declare class PaymentWriteRequest extends SpeakeasyBase {
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
    debtorAccount?: PaymentWriteRequestDebtorAccount;
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
    paymentProduct?: PaymentWriteRequestPaymentProductEnum;
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
