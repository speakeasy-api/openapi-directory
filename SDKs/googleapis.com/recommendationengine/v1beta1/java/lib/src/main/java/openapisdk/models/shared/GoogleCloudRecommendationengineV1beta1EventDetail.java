package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1EventDetail
 * User event details shared by all recommendation types.
**/
public class GoogleCloudRecommendationengineV1beta1EventDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventAttributes")
    public GoogleCloudRecommendationengineV1beta1FeatureMap eventAttributes;
    public GoogleCloudRecommendationengineV1beta1EventDetail withEventAttributes(GoogleCloudRecommendationengineV1beta1FeatureMap eventAttributes) {
        this.eventAttributes = eventAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experimentIds")
    public String[] experimentIds;
    public GoogleCloudRecommendationengineV1beta1EventDetail withExperimentIds(String[] experimentIds) {
        this.experimentIds = experimentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageViewId")
    public String pageViewId;
    public GoogleCloudRecommendationengineV1beta1EventDetail withPageViewId(String pageViewId) {
        this.pageViewId = pageViewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationToken")
    public String recommendationToken;
    public GoogleCloudRecommendationengineV1beta1EventDetail withRecommendationToken(String recommendationToken) {
        this.recommendationToken = recommendationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referrerUri")
    public String referrerUri;
    public GoogleCloudRecommendationengineV1beta1EventDetail withReferrerUri(String referrerUri) {
        this.referrerUri = referrerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudRecommendationengineV1beta1EventDetail withUri(String uri) {
        this.uri = uri;
        return this;
    }
}