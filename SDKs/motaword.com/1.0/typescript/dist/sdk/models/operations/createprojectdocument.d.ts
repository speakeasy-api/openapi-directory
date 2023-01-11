import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectDocumentPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class CreateProjectDocumentRequestBody extends SpeakeasyBase {
    documents?: Uint8Array[];
    schemes?: string;
    sourceLinks?: shared.LinkedSourceDocument[];
}
export declare class CreateProjectDocumentRequest extends SpeakeasyBase {
    pathParams: CreateProjectDocumentPathParams;
    request?: CreateProjectDocumentRequestBody;
}
export declare class CreateProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    documentList?: shared.DocumentList;
    error?: shared.ErrorT;
    statusCode: number;
}
