package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1Recommendation
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
public class GoogleCloudRecommenderV1Recommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImpact")
    public GoogleCloudRecommenderV1Impact[] additionalImpact;
    public GoogleCloudRecommenderV1Recommendation withAdditionalImpact(GoogleCloudRecommenderV1Impact[] additionalImpact) {
        this.additionalImpact = additionalImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedInsights")
    public GoogleCloudRecommenderV1RecommendationInsightReference[] associatedInsights;
    public GoogleCloudRecommenderV1Recommendation withAssociatedInsights(GoogleCloudRecommenderV1RecommendationInsightReference[] associatedInsights) {
        this.associatedInsights = associatedInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public GoogleCloudRecommenderV1RecommendationContent content;
    public GoogleCloudRecommenderV1Recommendation withContent(GoogleCloudRecommenderV1RecommendationContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRecommenderV1Recommendation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1Recommendation withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRefreshTime")
    public String lastRefreshTime;
    public GoogleCloudRecommenderV1Recommendation withLastRefreshTime(String lastRefreshTime) {
        this.lastRefreshTime = lastRefreshTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommenderV1Recommendation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryImpact")
    public GoogleCloudRecommenderV1Impact primaryImpact;
    public GoogleCloudRecommenderV1Recommendation withPrimaryImpact(GoogleCloudRecommenderV1Impact primaryImpact) {
        this.primaryImpact = primaryImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public GoogleCloudRecommenderV1RecommendationPriorityEnum priority;
    public GoogleCloudRecommenderV1Recommendation withPriority(GoogleCloudRecommenderV1RecommendationPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommenderSubtype")
    public String recommenderSubtype;
    public GoogleCloudRecommenderV1Recommendation withRecommenderSubtype(String recommenderSubtype) {
        this.recommenderSubtype = recommenderSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateInfo")
    public GoogleCloudRecommenderV1RecommendationStateInfo stateInfo;
    public GoogleCloudRecommenderV1Recommendation withStateInfo(GoogleCloudRecommenderV1RecommendationStateInfo stateInfo) {
        this.stateInfo = stateInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xorGroupId")
    public String xorGroupId;
    public GoogleCloudRecommenderV1Recommendation withXorGroupId(String xorGroupId) {
        this.xorGroupId = xorGroupId;
        return this;
    }
}