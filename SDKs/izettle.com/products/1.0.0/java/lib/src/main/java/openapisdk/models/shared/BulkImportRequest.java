package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BulkImportRequest {
    @JsonProperty("products")
    public FullProductUpdateRequest[] products;
    public BulkImportRequest withProducts(FullProductUpdateRequest[] products) {
        this.products = products;
        return this;
    }
}