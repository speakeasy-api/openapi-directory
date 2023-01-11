package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public LiasettingsCustomBatchResponseEntry[] entries;
    public LiasettingsCustomBatchResponse withEntries(LiasettingsCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiasettingsCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}