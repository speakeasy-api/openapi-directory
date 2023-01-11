package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1Feature
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
public class GoogleCloudVisionV1p2beta1Feature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Integer maxResults;
    public GoogleCloudVisionV1p2beta1Feature withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVisionV1p2beta1Feature withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudVisionV1p2beta1FeatureTypeEnum type;
    public GoogleCloudVisionV1p2beta1Feature withType(GoogleCloudVisionV1p2beta1FeatureTypeEnum type) {
        this.type = type;
        return this;
    }
}