import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationDocumentsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApplicationDocumentsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetApplicationDocumentsRequest extends SpeakeasyBase {
    pathParams: GetApplicationDocumentsPathParams;
    queryParams: GetApplicationDocumentsQueryParams;
}
export declare class GetApplicationDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedApplicationDocumentResult?: shared.PaginatedApplicationDocumentResult;
    statusCode: number;
}
