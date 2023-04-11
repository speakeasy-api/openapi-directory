import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rti transaction bases' employer core
 */
export declare class RtiTransactionBaseRtiTransactionBaseEmployerCore extends SpeakeasyBase {
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
 * The rti transaction bases' transaction status
 */
export declare enum RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}
export declare class RtiTransactionBaseRtiTransactionBase extends SpeakeasyBase {
    /**
     * The rti transaction bases' employer core
     */
    employerCore?: RtiTransactionBaseRtiTransactionBaseEmployerCore;
    /**
     * The rti transaction bases' request data
     */
    requestData?: string;
    /**
     * The rti transaction bases' response data
     */
    responseData?: string;
    /**
     * The rti transaction bases' rti type
     */
    rtiType?: string;
    /**
     * The rti transaction bases' tax year
     */
    taxYear?: number;
    /**
     * The rti transaction bases' timestamp
     */
    timestamp?: Date;
    /**
     * The rti transaction bases' transaction status
     */
    transactionStatus?: RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum;
    /**
     * The rti transaction bases' transmission date
     */
    transmissionDate?: Date;
}
/**
 * The rti transaction base object.
 */
export declare class RtiTransactionBase extends SpeakeasyBase {
    rtiTransactionBase?: RtiTransactionBaseRtiTransactionBase;
}
