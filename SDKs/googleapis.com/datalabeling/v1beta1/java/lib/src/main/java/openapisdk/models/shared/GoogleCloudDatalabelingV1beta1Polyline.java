package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Polyline
 * A line with multiple line segments.
**/
public class GoogleCloudDatalabelingV1beta1Polyline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vertices")
    public GoogleCloudDatalabelingV1beta1Vertex[] vertices;
    public GoogleCloudDatalabelingV1beta1Polyline withVertices(GoogleCloudDatalabelingV1beta1Vertex[] vertices) {
        this.vertices = vertices;
        return this;
    }
}