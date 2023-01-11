package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2RevisionScaling
 * Settings for revision-level scaling settings.
**/
public class GoogleCloudRunV2RevisionScaling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceCount")
    public Integer maxInstanceCount;
    public GoogleCloudRunV2RevisionScaling withMaxInstanceCount(Integer maxInstanceCount) {
        this.maxInstanceCount = maxInstanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minInstanceCount")
    public Integer minInstanceCount;
    public GoogleCloudRunV2RevisionScaling withMinInstanceCount(Integer minInstanceCount) {
        this.minInstanceCount = minInstanceCount;
        return this;
    }
}