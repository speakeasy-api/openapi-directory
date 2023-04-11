import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
/**
 * User event details shared by all recommendation types.
 */
export declare class GoogleCloudRecommendationengineV1beta1EventDetail extends SpeakeasyBase {
    /**
     * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
     */
    eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models).
     */
    experimentIds?: string[];
    /**
     * Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel.
     */
    pageViewId?: string;
    /**
     * Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query.
     */
    recommendationToken?: string;
    /**
     * Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically.
     */
    referrerUri?: string;
    /**
     * Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB.
     */
    uri?: string;
}
