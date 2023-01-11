package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1Position
 * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
**/
public class GoogleCloudVisionV1p1beta1Position {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Float x;
    public GoogleCloudVisionV1p1beta1Position withX(Float x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Float y;
    public GoogleCloudVisionV1p1beta1Position withY(Float y) {
        this.y = y;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("z")
    public Float z;
    public GoogleCloudVisionV1p1beta1Position withZ(Float z) {
        this.z = z;
        return this;
    }
}