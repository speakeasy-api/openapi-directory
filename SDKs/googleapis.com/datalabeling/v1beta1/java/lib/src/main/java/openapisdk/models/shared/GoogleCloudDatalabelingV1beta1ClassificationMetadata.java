package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ClassificationMetadata
 * Metadata for classification annotations.
**/
public class GoogleCloudDatalabelingV1beta1ClassificationMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMultiLabel")
    public Boolean isMultiLabel;
    public GoogleCloudDatalabelingV1beta1ClassificationMetadata withIsMultiLabel(Boolean isMultiLabel) {
        this.isMultiLabel = isMultiLabel;
        return this;
    }
}