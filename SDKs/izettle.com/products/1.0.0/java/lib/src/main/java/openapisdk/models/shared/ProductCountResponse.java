package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductCountResponse {
    @JsonProperty("productCount")
    public Integer productCount;
    public ProductCountResponse withProductCount(Integer productCount) {
        this.productCount = productCount;
        return this;
    }
}