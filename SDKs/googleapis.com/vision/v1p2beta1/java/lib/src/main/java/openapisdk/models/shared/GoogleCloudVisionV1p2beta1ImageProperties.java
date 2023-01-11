package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1ImageProperties
 * Stores image properties, such as dominant colors.
**/
public class GoogleCloudVisionV1p2beta1ImageProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dominantColors")
    public GoogleCloudVisionV1p2beta1DominantColorsAnnotation dominantColors;
    public GoogleCloudVisionV1p2beta1ImageProperties withDominantColors(GoogleCloudVisionV1p2beta1DominantColorsAnnotation dominantColors) {
        this.dominantColors = dominantColors;
        return this;
    }
}