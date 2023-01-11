package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductstatusesCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public ProductstatusesCustomBatchResponseEntry[] entries;
    public ProductstatusesCustomBatchResponse withEntries(ProductstatusesCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProductstatusesCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}