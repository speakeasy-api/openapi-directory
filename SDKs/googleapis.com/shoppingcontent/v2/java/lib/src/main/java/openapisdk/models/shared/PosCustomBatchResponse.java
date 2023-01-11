package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public PosCustomBatchResponseEntry[] entries;
    public PosCustomBatchResponse withEntries(PosCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PosCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}