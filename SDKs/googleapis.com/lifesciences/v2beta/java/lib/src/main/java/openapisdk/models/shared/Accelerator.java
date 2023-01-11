package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Accelerator
 * Carries information about an accelerator that can be attached to a VM.
**/
public class Accelerator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public Accelerator withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Accelerator withType(String type) {
        this.type = type;
        return this;
    }
}