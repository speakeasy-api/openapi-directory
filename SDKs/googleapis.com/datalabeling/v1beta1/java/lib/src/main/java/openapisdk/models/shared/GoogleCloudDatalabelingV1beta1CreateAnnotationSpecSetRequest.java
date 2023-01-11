package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
 * Request message for CreateAnnotationSpecSet.
**/
public class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest withAnnotationSpecSet(GoogleCloudDatalabelingV1beta1AnnotationSpecSet annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
}