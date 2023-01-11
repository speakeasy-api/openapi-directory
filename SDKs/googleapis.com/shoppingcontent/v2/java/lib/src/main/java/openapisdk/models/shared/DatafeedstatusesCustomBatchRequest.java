package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedstatusesCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public DatafeedstatusesCustomBatchRequestEntry[] entries;
    public DatafeedstatusesCustomBatchRequest withEntries(DatafeedstatusesCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}