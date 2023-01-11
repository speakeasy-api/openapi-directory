import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectDocumentPathParams extends SpeakeasyBase {
    documentId: number;
    projectId: number;
}
export declare class UpdateProjectDocumentRequestBodyDocuments extends SpeakeasyBase {
    content: Uint8Array;
    documents: string;
}
export declare class UpdateProjectDocumentRequestBody extends SpeakeasyBase {
    documents?: UpdateProjectDocumentRequestBodyDocuments;
    schemes?: string;
    sourceLink?: shared.LinkedSourceDocument;
}
export declare class UpdateProjectDocumentRequest extends SpeakeasyBase {
    pathParams: UpdateProjectDocumentPathParams;
    request?: UpdateProjectDocumentRequestBody;
}
export declare class UpdateProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    error?: shared.ErrorT;
    statusCode: number;
}
