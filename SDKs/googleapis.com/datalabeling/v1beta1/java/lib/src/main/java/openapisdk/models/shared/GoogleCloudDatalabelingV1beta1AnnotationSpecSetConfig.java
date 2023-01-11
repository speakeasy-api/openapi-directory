package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
 * Annotation spec set with the setting of allowing multi labels or not.
**/
public class GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultiLabel")
    public Boolean allowMultiLabel;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig withAllowMultiLabel(Boolean allowMultiLabel) {
        this.allowMultiLabel = allowMultiLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
}