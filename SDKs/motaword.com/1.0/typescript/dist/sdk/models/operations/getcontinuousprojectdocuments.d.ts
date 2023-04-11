import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectDocumentsRequest extends SpeakeasyBase {
    filterByLanguage?: string;
    /**
     * Continuous Project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of continuous project document models
     */
    continuousProjectDocumentList?: shared.ContinuousProjectDocumentList;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
