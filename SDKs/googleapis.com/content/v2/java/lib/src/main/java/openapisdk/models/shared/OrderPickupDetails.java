package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderPickupDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public OrderAddress address;
    public OrderPickupDetails withAddress(OrderAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectors")
    public OrderPickupDetailsCollector[] collectors;
    public OrderPickupDetails withCollectors(OrderPickupDetailsCollector[] collectors) {
        this.collectors = collectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public OrderPickupDetails withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}