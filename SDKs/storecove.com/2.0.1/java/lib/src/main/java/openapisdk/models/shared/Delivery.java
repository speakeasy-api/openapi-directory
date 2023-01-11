package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Delivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actualDate")
    public String actualDate;
    public Delivery withActualDate(String actualDate) {
        this.actualDate = actualDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public DeliveryLocation location;
    public Delivery withLocation(DeliveryLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public Delivery withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
}