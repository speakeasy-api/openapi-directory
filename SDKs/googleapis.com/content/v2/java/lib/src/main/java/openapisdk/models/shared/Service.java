package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Service withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Service withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCountry")
    public String deliveryCountry;
    public Service withDeliveryCountry(String deliveryCountry) {
        this.deliveryCountry = deliveryCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryTime")
    public DeliveryTime deliveryTime;
    public Service withDeliveryTime(DeliveryTime deliveryTime) {
        this.deliveryTime = deliveryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibility")
    public String eligibility;
    public Service withEligibility(String eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumOrderValue")
    public Price minimumOrderValue;
    public Service withMinimumOrderValue(Price minimumOrderValue) {
        this.minimumOrderValue = minimumOrderValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumOrderValueTable")
    public MinimumOrderValueTable minimumOrderValueTable;
    public Service withMinimumOrderValueTable(MinimumOrderValueTable minimumOrderValueTable) {
        this.minimumOrderValueTable = minimumOrderValueTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupService")
    public PickupCarrierService pickupService;
    public Service withPickupService(PickupCarrierService pickupService) {
        this.pickupService = pickupService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateGroups")
    public RateGroup[] rateGroups;
    public Service withRateGroups(RateGroup[] rateGroups) {
        this.rateGroups = rateGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentType")
    public String shipmentType;
    public Service withShipmentType(String shipmentType) {
        this.shipmentType = shipmentType;
        return this;
    }
}