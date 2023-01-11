package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuspendedRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public SuspendedRequest withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
}