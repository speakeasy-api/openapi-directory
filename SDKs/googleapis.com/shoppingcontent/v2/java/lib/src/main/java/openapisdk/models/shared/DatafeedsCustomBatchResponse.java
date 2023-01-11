package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedsCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public DatafeedsCustomBatchResponseEntry[] entries;
    public DatafeedsCustomBatchResponse withEntries(DatafeedsCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatafeedsCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}