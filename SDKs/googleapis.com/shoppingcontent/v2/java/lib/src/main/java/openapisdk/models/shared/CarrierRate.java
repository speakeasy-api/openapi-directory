package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CarrierRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierName")
    public String carrierName;
    public CarrierRate withCarrierName(String carrierName) {
        this.carrierName = carrierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierService")
    public String carrierService;
    public CarrierRate withCarrierService(String carrierService) {
        this.carrierService = carrierService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flatAdjustment")
    public Price flatAdjustment;
    public CarrierRate withFlatAdjustment(Price flatAdjustment) {
        this.flatAdjustment = flatAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CarrierRate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originPostalCode")
    public String originPostalCode;
    public CarrierRate withOriginPostalCode(String originPostalCode) {
        this.originPostalCode = originPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageAdjustment")
    public String percentageAdjustment;
    public CarrierRate withPercentageAdjustment(String percentageAdjustment) {
        this.percentageAdjustment = percentageAdjustment;
        return this;
    }
}