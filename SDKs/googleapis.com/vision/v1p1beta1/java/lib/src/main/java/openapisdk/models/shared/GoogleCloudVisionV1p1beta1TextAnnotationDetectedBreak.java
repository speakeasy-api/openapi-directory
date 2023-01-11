package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak
 * Detected start or end of a structural component.
**/
public class GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPrefix")
    public Boolean isPrefix;
    public GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak withIsPrefix(Boolean isPrefix) {
        this.isPrefix = isPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum type;
    public GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak withType(GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakTypeEnum type) {
        this.type = type;
        return this;
    }
}