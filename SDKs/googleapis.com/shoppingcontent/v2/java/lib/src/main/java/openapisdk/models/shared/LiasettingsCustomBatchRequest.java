package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public LiasettingsCustomBatchRequestEntry[] entries;
    public LiasettingsCustomBatchRequest withEntries(LiasettingsCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}