package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Row
 * A row in the confusion matrix. Each entry in this row has the same ground truth label.
**/
public class GoogleCloudDatalabelingV1beta1Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1Row withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[] entries;
    public GoogleCloudDatalabelingV1beta1Row withEntries(GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[] entries) {
        this.entries = entries;
        return this;
    }
}