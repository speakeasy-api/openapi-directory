import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodeRecommendationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEpisodeRecommendationsQueryParams extends SpeakeasyBase {
    safeMode?: number;
}
export declare class GetEpisodeRecommendationsHeaders extends SpeakeasyBase {
    xListenAPIKey: string;
}
export declare class GetEpisodeRecommendationsRequest extends SpeakeasyBase {
    pathParams: GetEpisodeRecommendationsPathParams;
    queryParams: GetEpisodeRecommendationsQueryParams;
    headers: GetEpisodeRecommendationsHeaders;
}
export declare class GetEpisodeRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    getEpisodeRecommendationsResponse?: shared.GetEpisodeRecommendationsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
