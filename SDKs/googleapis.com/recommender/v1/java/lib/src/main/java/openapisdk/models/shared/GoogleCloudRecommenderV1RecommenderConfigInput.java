package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1RecommenderConfigInput
 * Configuration for a Recommender.
**/
public class GoogleCloudRecommenderV1RecommenderConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRecommenderV1RecommenderConfigInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudRecommenderV1RecommenderConfigInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1RecommenderConfigInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommenderV1RecommenderConfigInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommenderGenerationConfig")
    public GoogleCloudRecommenderV1RecommenderGenerationConfig recommenderGenerationConfig;
    public GoogleCloudRecommenderV1RecommenderConfigInput withRecommenderGenerationConfig(GoogleCloudRecommenderV1RecommenderGenerationConfig recommenderGenerationConfig) {
        this.recommenderGenerationConfig = recommenderGenerationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRecommenderV1RecommenderConfigInput withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}