import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProjectDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class DeleteProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentNotFound
     */
    error?: shared.ErrorT;
    /**
     * Document deleted successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
