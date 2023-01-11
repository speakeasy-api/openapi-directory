package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1RecommenderConfig
 * Configuration for a Recommender.
**/
public class GoogleCloudRecommenderV1beta1RecommenderConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommenderGenerationConfig")
    public GoogleCloudRecommenderV1beta1RecommenderGenerationConfig recommenderGenerationConfig;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withRecommenderGenerationConfig(GoogleCloudRecommenderV1beta1RecommenderGenerationConfig recommenderGenerationConfig) {
        this.recommenderGenerationConfig = recommenderGenerationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRecommenderV1beta1RecommenderConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}