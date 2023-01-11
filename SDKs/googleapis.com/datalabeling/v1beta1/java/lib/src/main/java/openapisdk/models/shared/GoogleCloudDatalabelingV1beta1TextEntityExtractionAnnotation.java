package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
 * Text entity extraction annotation.
**/
public class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequentialSegment")
    public GoogleCloudDatalabelingV1beta1SequentialSegment sequentialSegment;
    public GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation withSequentialSegment(GoogleCloudDatalabelingV1beta1SequentialSegment sequentialSegment) {
        this.sequentialSegment = sequentialSegment;
        return this;
    }
}