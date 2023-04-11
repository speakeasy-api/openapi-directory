import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListBatchErrorsRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    batchId: string;
    /**
     * Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @remarks
     *
     */
    page?: number;
    pagesize?: number;
}
export declare class ListBatchErrorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    listBatchErrorsResponseBody?: shared.ListBatchErrorsResponseBody;
}
