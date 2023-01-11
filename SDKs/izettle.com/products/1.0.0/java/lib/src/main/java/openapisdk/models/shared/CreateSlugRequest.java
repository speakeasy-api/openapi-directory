package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSlugRequest {
    @JsonProperty("productName")
    public String productName;
    public CreateSlugRequest withProductName(String productName) {
        this.productName = productName;
        return this;
    }
}