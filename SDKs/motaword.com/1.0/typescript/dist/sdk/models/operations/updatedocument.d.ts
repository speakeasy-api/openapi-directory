import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    addOrUpdateDocumentRequest?: shared.AddOrUpdateDocumentRequest;
    /**
     * Continuous project document ID
     */
    documentId: number;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class UpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated continuous project document object.
     */
    continuousProjectDocument?: shared.ContinuousProjectDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
