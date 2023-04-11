import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContinuousProjectDocumentProgressRequest extends SpeakeasyBase {
    continuousProjectDocumentProgressBody?: shared.ContinuousProjectDocumentProgressBody;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class PostContinuousProjectDocumentProgressResponse extends SpeakeasyBase {
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
