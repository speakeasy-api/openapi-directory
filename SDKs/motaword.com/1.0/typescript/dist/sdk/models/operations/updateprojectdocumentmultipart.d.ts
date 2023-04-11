import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectDocumentMultipartRequest extends SpeakeasyBase {
    documentUploadRequest1?: shared.DocumentUploadRequest1;
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class UpdateProjectDocumentMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Updated document model
     */
    document?: shared.Document;
    /**
     * FileTooLarge FileTooSmall FileWasAlreadyUploaded
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
