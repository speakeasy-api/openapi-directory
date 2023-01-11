package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOffersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public Product[] products;
    public GetOffersResponse withProducts(Product[] products) {
        this.products = products;
        return this;
    }
}