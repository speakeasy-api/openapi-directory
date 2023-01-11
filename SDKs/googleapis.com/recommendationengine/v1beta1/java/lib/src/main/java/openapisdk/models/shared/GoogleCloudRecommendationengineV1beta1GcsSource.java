package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1GcsSource
 * Google Cloud Storage location for input content. format.
**/
public class GoogleCloudRecommendationengineV1beta1GcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUris")
    public String[] inputUris;
    public GoogleCloudRecommendationengineV1beta1GcsSource withInputUris(String[] inputUris) {
        this.inputUris = inputUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonSchema")
    public String jsonSchema;
    public GoogleCloudRecommendationengineV1beta1GcsSource withJsonSchema(String jsonSchema) {
        this.jsonSchema = jsonSchema;
        return this;
    }
}