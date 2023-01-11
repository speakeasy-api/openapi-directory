package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedsCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public DatafeedsCustomBatchRequestEntry[] entries;
    public DatafeedsCustomBatchRequest withEntries(DatafeedsCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}