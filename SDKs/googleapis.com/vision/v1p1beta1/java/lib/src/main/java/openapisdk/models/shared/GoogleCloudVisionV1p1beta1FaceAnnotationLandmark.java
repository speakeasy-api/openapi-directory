package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1FaceAnnotationLandmark
 * A face-specific landmark (for example, a face feature).
**/
public class GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public GoogleCloudVisionV1p1beta1Position position;
    public GoogleCloudVisionV1p1beta1FaceAnnotationLandmark withPosition(GoogleCloudVisionV1p1beta1Position position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkTypeEnum type;
    public GoogleCloudVisionV1p1beta1FaceAnnotationLandmark withType(GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkTypeEnum type) {
        this.type = type;
        return this;
    }
}