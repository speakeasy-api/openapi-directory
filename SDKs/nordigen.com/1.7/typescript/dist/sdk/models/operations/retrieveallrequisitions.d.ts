import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveAllRequisitionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class RetrieveAllRequisitionsRequest extends SpeakeasyBase {
    queryParams: RetrieveAllRequisitionsQueryParams;
}
export declare class RetrieveAllRequisitionsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedRequisitionList?: shared.PaginatedRequisitionList;
    statusCode: number;
}
