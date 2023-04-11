import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTransactionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * AUTO Transaction for internal use only
 */
export declare enum UpdateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}
export declare enum UpdateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}
export declare class UpdateTransactionRequestBody extends SpeakeasyBase {
    /**
     * Always 'true' for Transactions
     */
    active?: boolean;
    dateClosed?: Date;
    dateCreated?: Date;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Transaction
     */
    number?: string;
    paymentMethod?: string;
    /**
     * AUTO Transaction for internal use only
     */
    source?: UpdateTransactionRequestBodySourceEnum;
    status?: UpdateTransactionRequestBodyStatusEnum;
}
export declare class UpdateTransactionRequest extends SpeakeasyBase {
    requestBody?: UpdateTransactionRequestBody;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Transaction
     */
    transactionNumber: string;
}
export declare class UpdateTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
