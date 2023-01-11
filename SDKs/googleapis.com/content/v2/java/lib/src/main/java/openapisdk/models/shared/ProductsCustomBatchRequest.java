package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductsCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public ProductsCustomBatchRequestEntry[] entries;
    public ProductsCustomBatchRequest withEntries(ProductsCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}