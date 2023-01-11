package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedstatusesCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public DatafeedstatusesCustomBatchResponseEntry[] entries;
    public DatafeedstatusesCustomBatchResponse withEntries(DatafeedstatusesCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatafeedstatusesCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}