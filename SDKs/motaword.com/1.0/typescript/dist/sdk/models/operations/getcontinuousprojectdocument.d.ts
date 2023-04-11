import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID/Name
     */
    documentId: number;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Progress information
     */
    continuousProjectDocument?: shared.ContinuousProjectDocument;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
