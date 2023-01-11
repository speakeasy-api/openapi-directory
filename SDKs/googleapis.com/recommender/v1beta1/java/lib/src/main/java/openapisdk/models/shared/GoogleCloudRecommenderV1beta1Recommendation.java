package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1Recommendation
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
public class GoogleCloudRecommenderV1beta1Recommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImpact")
    public GoogleCloudRecommenderV1beta1Impact[] additionalImpact;
    public GoogleCloudRecommenderV1beta1Recommendation withAdditionalImpact(GoogleCloudRecommenderV1beta1Impact[] additionalImpact) {
        this.additionalImpact = additionalImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedInsights")
    public GoogleCloudRecommenderV1beta1RecommendationInsightReference[] associatedInsights;
    public GoogleCloudRecommenderV1beta1Recommendation withAssociatedInsights(GoogleCloudRecommenderV1beta1RecommendationInsightReference[] associatedInsights) {
        this.associatedInsights = associatedInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public GoogleCloudRecommenderV1beta1RecommendationContent content;
    public GoogleCloudRecommenderV1beta1Recommendation withContent(GoogleCloudRecommenderV1beta1RecommendationContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRecommenderV1beta1Recommendation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1beta1Recommendation withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRefreshTime")
    public String lastRefreshTime;
    public GoogleCloudRecommenderV1beta1Recommendation withLastRefreshTime(String lastRefreshTime) {
        this.lastRefreshTime = lastRefreshTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommenderV1beta1Recommendation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryImpact")
    public GoogleCloudRecommenderV1beta1Impact primaryImpact;
    public GoogleCloudRecommenderV1beta1Recommendation withPrimaryImpact(GoogleCloudRecommenderV1beta1Impact primaryImpact) {
        this.primaryImpact = primaryImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public GoogleCloudRecommenderV1beta1RecommendationPriorityEnum priority;
    public GoogleCloudRecommenderV1beta1Recommendation withPriority(GoogleCloudRecommenderV1beta1RecommendationPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommenderSubtype")
    public String recommenderSubtype;
    public GoogleCloudRecommenderV1beta1Recommendation withRecommenderSubtype(String recommenderSubtype) {
        this.recommenderSubtype = recommenderSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateInfo")
    public GoogleCloudRecommenderV1beta1RecommendationStateInfo stateInfo;
    public GoogleCloudRecommenderV1beta1Recommendation withStateInfo(GoogleCloudRecommenderV1beta1RecommendationStateInfo stateInfo) {
        this.stateInfo = stateInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xorGroupId")
    public String xorGroupId;
    public GoogleCloudRecommenderV1beta1Recommendation withXorGroupId(String xorGroupId) {
        this.xorGroupId = xorGroupId;
        return this;
    }
}