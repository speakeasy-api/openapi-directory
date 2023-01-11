package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1Insight
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
public class GoogleCloudRecommenderV1beta1Insight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedRecommendations")
    public GoogleCloudRecommenderV1beta1InsightRecommendationReference[] associatedRecommendations;
    public GoogleCloudRecommenderV1beta1Insight withAssociatedRecommendations(GoogleCloudRecommenderV1beta1InsightRecommendationReference[] associatedRecommendations) {
        this.associatedRecommendations = associatedRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public GoogleCloudRecommenderV1beta1InsightCategoryEnum category;
    public GoogleCloudRecommenderV1beta1Insight withCategory(GoogleCloudRecommenderV1beta1InsightCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public java.util.Map<String, Object> content;
    public GoogleCloudRecommenderV1beta1Insight withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRecommenderV1beta1Insight withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1beta1Insight withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insightSubtype")
    public String insightSubtype;
    public GoogleCloudRecommenderV1beta1Insight withInsightSubtype(String insightSubtype) {
        this.insightSubtype = insightSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRefreshTime")
    public String lastRefreshTime;
    public GoogleCloudRecommenderV1beta1Insight withLastRefreshTime(String lastRefreshTime) {
        this.lastRefreshTime = lastRefreshTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommenderV1beta1Insight withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observationPeriod")
    public String observationPeriod;
    public GoogleCloudRecommenderV1beta1Insight withObservationPeriod(String observationPeriod) {
        this.observationPeriod = observationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudRecommenderV1beta1InsightSeverityEnum severity;
    public GoogleCloudRecommenderV1beta1Insight withSeverity(GoogleCloudRecommenderV1beta1InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateInfo")
    public GoogleCloudRecommenderV1beta1InsightStateInfo stateInfo;
    public GoogleCloudRecommenderV1beta1Insight withStateInfo(GoogleCloudRecommenderV1beta1InsightStateInfo stateInfo) {
        this.stateInfo = stateInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetResources")
    public String[] targetResources;
    public GoogleCloudRecommenderV1beta1Insight withTargetResources(String[] targetResources) {
        this.targetResources = targetResources;
        return this;
    }
}