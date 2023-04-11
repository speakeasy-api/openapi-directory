import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cis transactions' cis message type
 */
export declare enum CisTransactionCisTransactionCisMessageTypeEnum {
    Verification = "Verification",
    Return = "Return"
}
/**
 * The cis transactions' employer core
 */
export declare class CisTransactionCisTransactionEmployerCore extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The cis transactions' transaction status
 */
export declare enum CisTransactionCisTransactionTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}
export declare class CisTransactionCisTransaction extends SpeakeasyBase {
    /**
     * The cis transactions' cis message type
     */
    cisMessageType?: CisTransactionCisTransactionCisMessageTypeEnum;
    /**
     * The cis transactions' employer core
     */
    employerCore?: CisTransactionCisTransactionEmployerCore;
    /**
     * The cis transactions' request data
     */
    requestData?: string;
    /**
     * The cis transactions' response data
     */
    responseData?: string;
    /**
     * The cis transactions' tax year
     */
    taxYear?: number;
    /**
     * The cis transactions' timestamp
     */
    timestamp?: Date;
    /**
     * The cis transactions' transaction status
     */
    transactionStatus?: CisTransactionCisTransactionTransactionStatusEnum;
    /**
     * The cis transactions' transmission date
     */
    transmissionDate?: Date;
}
/**
 * The cis transaction object.
 */
export declare class CisTransaction extends SpeakeasyBase {
    cisTransaction?: CisTransactionCisTransaction;
}
