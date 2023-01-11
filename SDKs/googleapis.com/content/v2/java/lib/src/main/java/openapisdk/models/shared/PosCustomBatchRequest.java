package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public PosCustomBatchRequestEntry[] entries;
    public PosCustomBatchRequest withEntries(PosCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}