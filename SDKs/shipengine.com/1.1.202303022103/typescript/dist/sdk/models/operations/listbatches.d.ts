import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Controls the sort order of queries
 *
 * @remarks
 *
 * |Value     |Description
 * |:---------|:-----------------------------------------------------
 * |`asc`     |Return results in ascending order
 * |`desc`    |Return results in descending order
 *
 */
export declare enum ListBatchesSortDirSortDirEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ListBatchesRequest extends SpeakeasyBase {
    /**
     * Batch Number
     */
    batchNumber?: string;
    /**
     * Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * The number of results to return per response.
     */
    pageSize?: number;
    /**
     * The possible batches sort by values
     */
    sortBy?: shared.BatchesSortByEnum;
    /**
     * Controls the sort order of the query.
     */
    sortDir?: ListBatchesSortDirSortDirEnum;
    /**
     * The possible batch status values
     */
    status?: shared.BatchStatusEnum;
}
export declare class ListBatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified resource does not exist.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    listBatchesResponseBody?: shared.ListBatchesResponseBody;
}
