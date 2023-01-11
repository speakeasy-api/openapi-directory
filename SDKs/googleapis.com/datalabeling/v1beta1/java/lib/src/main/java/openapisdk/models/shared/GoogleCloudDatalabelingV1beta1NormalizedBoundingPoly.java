package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
 * Normalized bounding polygon.
**/
public class GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedVertices")
    public GoogleCloudDatalabelingV1beta1NormalizedVertex[] normalizedVertices;
    public GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly withNormalizedVertices(GoogleCloudDatalabelingV1beta1NormalizedVertex[] normalizedVertices) {
        this.normalizedVertices = normalizedVertices;
        return this;
    }
}