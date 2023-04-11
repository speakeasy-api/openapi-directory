import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectProgressRequest extends SpeakeasyBase {
    filterByLanguage?: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Progress information
     */
    continuousProjectProgress?: shared.ContinuousProjectProgress;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
