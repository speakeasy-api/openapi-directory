package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsMount
 * Configuration for an `NFSMount` to be attached to the VM.
**/
public class NfsMount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public NfsMount withTarget(String target) {
        this.target = target;
        return this;
    }
}