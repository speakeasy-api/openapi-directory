import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBatchesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    sortBy?: shared.BatchesSortByEnum;
    sortDir?: Record<string, any>;
    status?: shared.BatchStatusEnum;
}
export declare class ListBatchesRequest extends SpeakeasyBase {
    queryParams: ListBatchesQueryParams;
}
export declare class ListBatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listBatchesResponseBody?: shared.ListBatchesResponseBody;
}
