import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectDocumentPathParams extends SpeakeasyBase {
    documentId: number;
    projectId: number;
}
export declare class DeleteProjectDocumentRequest extends SpeakeasyBase {
    pathParams: DeleteProjectDocumentPathParams;
}
export declare class DeleteProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
