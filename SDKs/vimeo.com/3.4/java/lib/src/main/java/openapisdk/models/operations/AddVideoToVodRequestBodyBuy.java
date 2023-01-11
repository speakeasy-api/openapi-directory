package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddVideoToVodRequestBodyBuy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public AddVideoToVodRequestBodyBuyPrice price;
    public AddVideoToVodRequestBodyBuy withPrice(AddVideoToVodRequestBodyBuyPrice price) {
        this.price = price;
        return this;
    }
}