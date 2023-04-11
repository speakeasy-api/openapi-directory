import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTranslationCacheRequest extends SpeakeasyBase {
    /**
     * Flatten cache results and ignore document keys
     */
    flatten?: boolean;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetTranslationCacheResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Response for strings and their translations
     */
    continuousProjectCache?: shared.ContinuousProjectCache;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
