import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectDocumentsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum GetProjectDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetProjectDocumentsQueryParams extends SpeakeasyBase {
    with?: GetProjectDocumentsWithEnum[];
}
export declare class GetProjectDocumentsRequest extends SpeakeasyBase {
    pathParams: GetProjectDocumentsPathParams;
    queryParams: GetProjectDocumentsQueryParams;
}
export declare class GetProjectDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentList?: shared.DocumentList;
    error?: shared.ErrorT;
    statusCode: number;
}
