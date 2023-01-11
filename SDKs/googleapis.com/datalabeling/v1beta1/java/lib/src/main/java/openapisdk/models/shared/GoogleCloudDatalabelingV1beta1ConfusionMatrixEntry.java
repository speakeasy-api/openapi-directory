package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemCount")
    public Integer itemCount;
    public GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry withItemCount(Integer itemCount) {
        this.itemCount = itemCount;
        return this;
    }
}