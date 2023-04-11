import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodeRecommendationsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Episode id.
     */
    id: string;
    /**
     * Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
     */
    safeMode?: shared.SafeModeParamEnum;
}
export declare class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getEpisodeRecommendationsResponse?: shared.GetEpisodeRecommendationsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
