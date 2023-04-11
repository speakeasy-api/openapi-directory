import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageRecommendationsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetImageRecommendationsRequest extends SpeakeasyBase {
    /**
     * Image IDs
     */
    id: string[];
    /**
     * Maximum number of results returned in the response
     */
    maxItems?: number;
    /**
     * Restrict results to safe images
     */
    safe?: boolean;
}
export declare class GetImageRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    recommendationDataList?: shared.RecommendationDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
