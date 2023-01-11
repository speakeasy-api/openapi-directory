package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
 * Video object tracking annotation.
**/
public class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingFrames")
    public GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[] objectTrackingFrames;
    public GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation withObjectTrackingFrames(GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[] objectTrackingFrames) {
        this.objectTrackingFrames = objectTrackingFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSegment")
    public GoogleCloudDatalabelingV1beta1TimeSegment timeSegment;
    public GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation withTimeSegment(GoogleCloudDatalabelingV1beta1TimeSegment timeSegment) {
        this.timeSegment = timeSegment;
        return this;
    }
}