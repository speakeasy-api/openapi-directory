import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectDocumentPathParams extends SpeakeasyBase {
    documentId: number;
    projectId: number;
}
export declare enum GetProjectDocumentWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetProjectDocumentQueryParams extends SpeakeasyBase {
    with?: GetProjectDocumentWithEnum[];
}
export declare class GetProjectDocumentRequest extends SpeakeasyBase {
    pathParams: GetProjectDocumentPathParams;
    queryParams: GetProjectDocumentQueryParams;
}
export declare class GetProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    error?: shared.ErrorT;
    statusCode: number;
}
