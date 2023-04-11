import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectDocumentProgressRequest extends SpeakeasyBase {
    /**
     * Document ID/Name
     */
    documentId: number;
    filterByLanguage?: string;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectDocumentProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Progress information
     */
    progress?: shared.Progress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
