import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Insight } from "./googlecloudrecommenderv1beta1insight";
/**
 * Response to the `ListInsights` method.
 */
export declare class GoogleCloudRecommenderV1beta1ListInsightsResponse extends SpeakeasyBase {
    /**
     * The set of insights for the `parent` resource.
     */
    insights?: GoogleCloudRecommenderV1beta1Insight[];
    /**
     * A token that can be used to request the next page of results. This field is empty if there are no additional results.
     */
    nextPageToken?: string;
}
