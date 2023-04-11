import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPodcastRecommendationsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Podcast id.
     */
    id: string;
    /**
     * Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
     */
    safeMode?: shared.SafeModeParamEnum;
}
export declare class GetPodcastRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getPodcastRecommendationsResponse?: shared.GetPodcastRecommendationsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
