import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectDocumentRequest extends SpeakeasyBase {
    documentUpdates?: shared.DocumentUpdates;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class CreateProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of successfully added new documents.
     */
    documentList?: shared.DocumentList;
    /**
     * FileTooLarge FileTooSmall FileWasAlreadyUploaded
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
