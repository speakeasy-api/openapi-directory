package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1NormalizedVertex
 * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
**/
public class GoogleCloudDatalabelingV1beta1NormalizedVertex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Float x;
    public GoogleCloudDatalabelingV1beta1NormalizedVertex withX(Float x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Float y;
    public GoogleCloudDatalabelingV1beta1NormalizedVertex withY(Float y) {
        this.y = y;
        return this;
    }
}