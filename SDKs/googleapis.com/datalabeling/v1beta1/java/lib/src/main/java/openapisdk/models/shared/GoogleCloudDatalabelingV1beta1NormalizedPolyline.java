package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1NormalizedPolyline
 * Normalized polyline.
**/
public class GoogleCloudDatalabelingV1beta1NormalizedPolyline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedVertices")
    public GoogleCloudDatalabelingV1beta1NormalizedVertex[] normalizedVertices;
    public GoogleCloudDatalabelingV1beta1NormalizedPolyline withNormalizedVertices(GoogleCloudDatalabelingV1beta1NormalizedVertex[] normalizedVertices) {
        this.normalizedVertices = normalizedVertices;
        return this;
    }
}