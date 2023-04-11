import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Limit to transactions of this type.
 */
export declare enum GetCategoriesIdTransactionsTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class GetCategoriesIdTransactionsRequest extends SpeakeasyBase {
    /**
     * Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.
     */
    endDate?: string;
    /**
     * A comma-separated list of category IDs.
     */
    id: string;
    /**
     * Limit to transactions that need to be reviewed.
     */
    needsReview?: number;
    /**
     * Choose a particular page of the results.
     */
    page?: number;
    /**
     * Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.
     */
    search?: string;
    /**
     * Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.
     */
    startDate?: string;
    /**
     * Limit to transactions of this type.
     */
    type?: GetCategoriesIdTransactionsTypeEnum;
    /**
     * Limit to uncategorised transactions.
     */
    uncategorised?: number;
    /**
     * Limit to transactions updated since an ISO 8601 timestamp.
     */
    updatedSince?: string;
}
export declare class GetCategoriesIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    transactions?: shared.Transaction[];
}
