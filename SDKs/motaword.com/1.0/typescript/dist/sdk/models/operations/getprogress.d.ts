import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProgressRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
    /**
     * This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.
     */
    raw?: boolean;
}
export declare class GetProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    /**
     * Progress information
     */
    progress?: shared.Progress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
