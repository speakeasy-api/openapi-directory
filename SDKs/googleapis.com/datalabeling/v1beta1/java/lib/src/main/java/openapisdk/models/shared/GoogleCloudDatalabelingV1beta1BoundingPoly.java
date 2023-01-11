package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1BoundingPoly
 * A bounding polygon in the image.
**/
public class GoogleCloudDatalabelingV1beta1BoundingPoly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertices")
    public GoogleCloudDatalabelingV1beta1Vertex[] vertices;
    public GoogleCloudDatalabelingV1beta1BoundingPoly withVertices(GoogleCloudDatalabelingV1beta1Vertex[] vertices) {
        this.vertices = vertices;
        return this;
    }
}