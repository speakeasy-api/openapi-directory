package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1Image
 * Catalog item thumbnail/detail image.
**/
public class GoogleCloudRecommendationengineV1beta1Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public GoogleCloudRecommendationengineV1beta1Image withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudRecommendationengineV1beta1Image withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public GoogleCloudRecommendationengineV1beta1Image withWidth(Integer width) {
        this.width = width;
        return this;
    }
}