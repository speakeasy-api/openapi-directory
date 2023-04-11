import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Insight } from "./googlecloudrecommenderv1insight";
/**
 * Response to the `ListInsights` method.
 */
export declare class GoogleCloudRecommenderV1ListInsightsResponse extends SpeakeasyBase {
    /**
     * The set of insights for the `parent` resource.
     */
    insights?: GoogleCloudRecommenderV1Insight[];
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string;
}
