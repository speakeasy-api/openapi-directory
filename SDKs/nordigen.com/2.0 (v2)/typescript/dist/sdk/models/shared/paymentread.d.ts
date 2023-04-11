import { SpeakeasyBase } from "../../../internal/utils";
import { DebtorAccountWrite } from "./debtoraccountwrite";
import { InstructedAmount } from "./instructedamount";
/**
 * Payment product
 */
export declare enum PaymentReadPaymentProductEnum {
    T2P = "T2P",
    Sct = "SCT",
    Isct = "ISCT",
    Cbct = "CBCT"
}
/**
 * Payment end to end identification
 */
export declare enum PaymentReadPaymentStatusEnum {
    Init = "INIT",
    Erre = "ERRE",
    Errs = "ERRS",
    Accc = "ACCC",
    Accp = "ACCP",
    Acsc = "ACSC",
    Acsp = "ACSP",
    Actc = "ACTC",
    Acwc = "ACWC",
    Acwp = "ACWP",
    Rcvd = "RCVD",
    Pdng = "PDNG",
    Rjct = "RJCT",
    Canc = "CANC",
    Acfc = "ACFC",
    Patc = "PATC",
    Part = "PART"
}
/**
 * Payment Type
 */
export declare enum PaymentReadPaymentTypeEnum {
    SinglePayment = "single-payment",
    BulkPayment = "bulk-payment",
    PeriodicPayment = "periodic-payment"
}
/**
 * PaymentReadSerializer.
 */
export declare class PaymentRead extends SpeakeasyBase {
    /**
     * Registered creditor account
     */
    creditorAccount: string;
    /**
     * Payment Custom Payment ID
     */
    customPaymentId?: string;
    /**
     * Debtor account write serializer.
     */
    debtorAccount: DebtorAccountWrite;
    /**
     * Payment description
     */
    description?: string;
    /**
     * Instructed amount
     */
    instructedAmount: InstructedAmount;
    /**
     * Payment ID
     */
    paymentId?: string;
    /**
     * Payment product
     */
    paymentProduct?: PaymentReadPaymentProductEnum;
    /**
     * Payment end to end identification
     */
    paymentStatus?: PaymentReadPaymentStatusEnum;
    /**
     * Payment Type
     */
    paymentType?: PaymentReadPaymentTypeEnum;
    /**
     * Redirect URL to your application after payment is done
     */
    redirect: string;
}
