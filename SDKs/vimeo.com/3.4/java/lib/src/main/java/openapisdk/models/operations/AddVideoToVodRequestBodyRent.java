package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddVideoToVodRequestBodyRent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public AddVideoToVodRequestBodyRentPrice price;
    public AddVideoToVodRequestBodyRent withPrice(AddVideoToVodRequestBodyRentPrice price) {
        this.price = price;
        return this;
    }
}