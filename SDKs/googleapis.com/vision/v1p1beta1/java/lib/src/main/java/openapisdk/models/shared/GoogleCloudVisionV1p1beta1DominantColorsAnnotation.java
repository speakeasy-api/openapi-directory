package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1DominantColorsAnnotation
 * Set of dominant colors and their corresponding scores.
**/
public class GoogleCloudVisionV1p1beta1DominantColorsAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colors")
    public GoogleCloudVisionV1p1beta1ColorInfo[] colors;
    public GoogleCloudVisionV1p1beta1DominantColorsAnnotation withColors(GoogleCloudVisionV1p1beta1ColorInfo[] colors) {
        this.colors = colors;
        return this;
    }
}