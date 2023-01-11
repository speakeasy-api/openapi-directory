package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancellationReasonsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public CancellationReason[] reasons;
    public CancellationReasonsResponse withReasons(CancellationReason[] reasons) {
        this.reasons = reasons;
        return this;
    }
}