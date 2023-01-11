package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivationResponseMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootContentId")
    public String rootContentId;
    public ActivationResponseMetadata withRootContentId(String rootContentId) {
        this.rootContentId = rootContentId;
        return this;
    }
}