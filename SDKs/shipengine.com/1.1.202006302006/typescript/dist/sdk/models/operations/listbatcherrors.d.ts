import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBatchErrorsPathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class ListBatchErrorsQueryParams extends SpeakeasyBase {
    page?: number;
    pagesize?: number;
}
export declare class ListBatchErrorsRequest extends SpeakeasyBase {
    pathParams: ListBatchErrorsPathParams;
    queryParams: ListBatchErrorsQueryParams;
}
export declare class ListBatchErrorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listBatchErrorsResponseBody?: shared.ListBatchErrorsResponseBody;
}
