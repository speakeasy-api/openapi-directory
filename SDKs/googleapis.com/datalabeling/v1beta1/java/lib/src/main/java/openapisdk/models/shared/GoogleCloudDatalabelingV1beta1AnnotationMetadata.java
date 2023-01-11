package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotationMetadata
 * Additional information associated with the annotation.
**/
public class GoogleCloudDatalabelingV1beta1AnnotationMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorMetadata")
    public GoogleCloudDatalabelingV1beta1OperatorMetadata operatorMetadata;
    public GoogleCloudDatalabelingV1beta1AnnotationMetadata withOperatorMetadata(GoogleCloudDatalabelingV1beta1OperatorMetadata operatorMetadata) {
        this.operatorMetadata = operatorMetadata;
        return this;
    }
}