package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WarehouseBasedDeliveryTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public WarehouseBasedDeliveryTime withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierService")
    public String carrierService;
    public WarehouseBasedDeliveryTime withCarrierService(String carrierService) {
        this.carrierService = carrierService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originAdministrativeArea")
    public String originAdministrativeArea;
    public WarehouseBasedDeliveryTime withOriginAdministrativeArea(String originAdministrativeArea) {
        this.originAdministrativeArea = originAdministrativeArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originCity")
    public String originCity;
    public WarehouseBasedDeliveryTime withOriginCity(String originCity) {
        this.originCity = originCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originCountry")
    public String originCountry;
    public WarehouseBasedDeliveryTime withOriginCountry(String originCountry) {
        this.originCountry = originCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originPostalCode")
    public String originPostalCode;
    public WarehouseBasedDeliveryTime withOriginPostalCode(String originPostalCode) {
        this.originPostalCode = originPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originStreetAddress")
    public String originStreetAddress;
    public WarehouseBasedDeliveryTime withOriginStreetAddress(String originStreetAddress) {
        this.originStreetAddress = originStreetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouseName")
    public String warehouseName;
    public WarehouseBasedDeliveryTime withWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
        return this;
    }
}