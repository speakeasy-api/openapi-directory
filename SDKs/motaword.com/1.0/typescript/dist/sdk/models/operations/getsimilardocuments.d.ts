import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarDocumentsPathParams extends SpeakeasyBase {
    documentId: number;
}
export declare enum GetSimilarDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetSimilarDocumentsQueryParams extends SpeakeasyBase {
    perPage?: number;
    with?: GetSimilarDocumentsWithEnum[];
}
export declare class GetSimilarDocumentsRequest extends SpeakeasyBase {
    pathParams: GetSimilarDocumentsPathParams;
    queryParams: GetSimilarDocumentsQueryParams;
}
export declare class GetSimilarDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentList?: shared.DocumentList;
    statusCode: number;
}
