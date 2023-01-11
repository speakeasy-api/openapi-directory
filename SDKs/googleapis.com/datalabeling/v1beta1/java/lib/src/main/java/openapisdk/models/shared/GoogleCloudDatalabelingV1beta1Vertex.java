package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Vertex
 * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
**/
public class GoogleCloudDatalabelingV1beta1Vertex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Integer x;
    public GoogleCloudDatalabelingV1beta1Vertex withX(Integer x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Integer y;
    public GoogleCloudDatalabelingV1beta1Vertex withY(Integer y) {
        this.y = y;
        return this;
    }
}