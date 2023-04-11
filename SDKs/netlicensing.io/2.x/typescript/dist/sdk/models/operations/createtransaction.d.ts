import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTransactionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * AUTO Transaction for internal use only
 */
export declare enum CreateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}
export declare enum CreateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}
export declare class CreateTransactionRequestBody extends SpeakeasyBase {
    /**
     * Always 'true' for Transactions
     */
    active: boolean;
    dateClosed?: Date;
    dateCreated?: Date;
    licenseeNumber?: string;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Transaction
     */
    number?: string;
    paymentMethod?: string;
    /**
     * AUTO Transaction for internal use only
     */
    source: CreateTransactionRequestBodySourceEnum;
    status: CreateTransactionRequestBodyStatusEnum;
}
export declare class CreateTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
