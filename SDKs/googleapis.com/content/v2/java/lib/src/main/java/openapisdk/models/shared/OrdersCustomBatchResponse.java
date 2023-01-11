package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public OrdersCustomBatchResponseEntry[] entries;
    public OrdersCustomBatchResponse withEntries(OrdersCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrdersCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}