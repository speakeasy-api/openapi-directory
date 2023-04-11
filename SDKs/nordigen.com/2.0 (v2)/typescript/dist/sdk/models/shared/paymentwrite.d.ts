import { SpeakeasyBase } from "../../../internal/utils";
import { InstructedAmount } from "./instructedamount";
import { PeriodicPayment } from "./periodicpayment";
/**
 * Payment product
 */
export declare enum PaymentWritePaymentProductEnum {
    T2P = "T2P",
    Sct = "SCT",
    Isct = "ISCT",
    Cbct = "CBCT"
}
/**
 * Payment end to end identification
 */
export declare enum PaymentWritePaymentStatusEnum {
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
export declare enum PaymentWritePaymentTypeEnum {
    SinglePayment = "single-payment",
    BulkPayment = "bulk-payment",
    PeriodicPayment = "periodic-payment"
}
/**
 * PaymentWriteSerializer.
 */
export declare class PaymentWrite extends SpeakeasyBase {
    /**
     * Registered creditor account
     */
    creditorAccount: string;
    /**
     * Payment Custom Payment ID
     */
    customPaymentId?: string;
    /**
     * Payment description
     */
    description?: string;
    /**
     * Instructed amount
     */
    instructedAmount: InstructedAmount;
    /**
     * Link to initiate authorization with Institution
     */
    link?: string;
    /**
     * Payment ID
     */
    paymentId?: string;
    /**
     * Payment product
     */
    paymentProduct?: PaymentWritePaymentProductEnum;
    /**
     * Payment end to end identification
     */
    paymentStatus?: PaymentWritePaymentStatusEnum;
    /**
     * Payment Type
     */
    paymentType?: PaymentWritePaymentTypeEnum;
    /**
     * Periodic Payment Serializer.
     */
    periodicPayment?: PeriodicPayment;
    /**
     * Redirect URL to your application after payment is done
     */
    redirect: string;
    /**
     * Payment Execution date (for periodic payments)
     */
    requestedExecutionDate?: Date;
}
