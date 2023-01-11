package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation
 * Image classification annotation definition.
**/
public class GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
}