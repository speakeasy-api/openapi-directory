package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemProductFee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public OrderLineItemProductFee withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderLineItemProductFee withName(String name) {
        this.name = name;
        return this;
    }
}