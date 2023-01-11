package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConvertRegionPricesRequest
 * Request message for ConvertRegionPrices.
**/
public class ConvertRegionPricesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public ConvertRegionPricesRequest withPrice(Money price) {
        this.price = price;
        return this;
    }
}