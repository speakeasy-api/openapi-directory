package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShippingsettingsCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public ShippingsettingsCustomBatchResponseEntry[] entries;
    public ShippingsettingsCustomBatchResponse withEntries(ShippingsettingsCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ShippingsettingsCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}