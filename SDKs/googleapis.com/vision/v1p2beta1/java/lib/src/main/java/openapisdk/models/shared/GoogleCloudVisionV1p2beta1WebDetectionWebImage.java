package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1WebDetectionWebImage
 * Metadata for online images.
**/
public class GoogleCloudVisionV1p2beta1WebDetectionWebImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p2beta1WebDetectionWebImage withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleCloudVisionV1p2beta1WebDetectionWebImage withUrl(String url) {
        this.url = url;
        return this;
    }
}