package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1BoundingPoly
 * A bounding polygon for the detected image annotation.
**/
public class GoogleCloudVisionV1p1beta1BoundingPoly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedVertices")
    public GoogleCloudVisionV1p1beta1NormalizedVertex[] normalizedVertices;
    public GoogleCloudVisionV1p1beta1BoundingPoly withNormalizedVertices(GoogleCloudVisionV1p1beta1NormalizedVertex[] normalizedVertices) {
        this.normalizedVertices = normalizedVertices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertices")
    public GoogleCloudVisionV1p1beta1Vertex[] vertices;
    public GoogleCloudVisionV1p1beta1BoundingPoly withVertices(GoogleCloudVisionV1p1beta1Vertex[] vertices) {
        this.vertices = vertices;
        return this;
    }
}