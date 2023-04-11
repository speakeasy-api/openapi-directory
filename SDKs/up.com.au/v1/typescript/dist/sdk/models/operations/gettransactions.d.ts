import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsRequest extends SpeakeasyBase {
    /**
     * The category identifier for which to filter transactions.
     *
     * @remarks
     * Both parent and child categories can be filtered through
     * this parameter. Providing an invalid category identifier
     * results in a `404` response.
     *
     */
    filterCategory?: string;
    /**
     * The start date-time from which to return records,
     *
     * @remarks
     * formatted according to rfc-3339. Not to be used for
     * pagination purposes.
     *
     */
    filterSince?: Date;
    /**
     * The transaction status for which to return records. This
     *
     * @remarks
     * can be used to filter `HELD` transactions from those
     * that are `SETTLED`.
     *
     */
    filterStatus?: shared.TransactionStatusEnumEnum;
    /**
     * A transaction tag to filter for which to return records.
     *
     * @remarks
     * If the tag does not exist, zero records are returned and
     * a success response is given.
     *
     */
    filterTag?: string;
    /**
     * The end date-time up to which to return records,
     *
     * @remarks
     * formatted according to rfc-3339. Not to be used for
     * pagination purposes.
     *
     */
    filterUntil?: Date;
    /**
     * The number of records to return in each page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    listTransactionsResponse?: shared.ListTransactionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
