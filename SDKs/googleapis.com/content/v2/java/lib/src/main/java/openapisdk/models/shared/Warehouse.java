package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Warehouse
 * A fulfillment warehouse, which stores and handles inventory.
**/
public class Warehouse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessDayConfig")
    public BusinessDayConfig businessDayConfig;
    public Warehouse withBusinessDayConfig(BusinessDayConfig businessDayConfig) {
        this.businessDayConfig = businessDayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cutoffTime")
    public WarehouseCutoffTime cutoffTime;
    public Warehouse withCutoffTime(WarehouseCutoffTime cutoffTime) {
        this.cutoffTime = cutoffTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlingDays")
    public String handlingDays;
    public Warehouse withHandlingDays(String handlingDays) {
        this.handlingDays = handlingDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Warehouse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingAddress")
    public Address shippingAddress;
    public Warehouse withShippingAddress(Address shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
}