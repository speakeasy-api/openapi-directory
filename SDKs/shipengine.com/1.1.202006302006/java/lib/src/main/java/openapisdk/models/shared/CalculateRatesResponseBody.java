package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CalculateRatesResponseBody
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
public class CalculateRatesResponseBody {
    @JsonProperty("advanced_options")
    public AdvancedShipmentOptions advancedOptions;
    public CalculateRatesResponseBody withAdvancedOptions(AdvancedShipmentOptions advancedOptions) {
        this.advancedOptions = advancedOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public String carrierId;
    public CalculateRatesResponseBody withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("confirmation")
    public java.util.Map<String, Object> confirmation;
    public CalculateRatesResponseBody withConfirmation(java.util.Map<String, Object> confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CalculateRatesResponseBody withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("customs")
    public CalculateRatesResponseBodyInternationalShipmentOptions customs;
    public CalculateRatesResponseBody withCustoms(CalculateRatesResponseBodyInternationalShipmentOptions customs) {
        this.customs = customs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_order_id")
    public String externalOrderId;
    public CalculateRatesResponseBody withExternalOrderId(String externalOrderId) {
        this.externalOrderId = externalOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public String externalShipmentId;
    public CalculateRatesResponseBody withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonProperty("insurance_provider")
    public java.util.Map<String, Object> insuranceProvider;
    public CalculateRatesResponseBody withInsuranceProvider(java.util.Map<String, Object> insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ShipmentItem[] items;
    public CalculateRatesResponseBody withItems(ShipmentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("modified_at")
    public java.util.Map<String, Object> modifiedAt;
    public CalculateRatesResponseBody withModifiedAt(java.util.Map<String, Object> modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_source_code")
    public OrderSourceNameEnum orderSourceCode;
    public CalculateRatesResponseBody withOrderSourceCode(OrderSourceNameEnum orderSourceCode) {
        this.orderSourceCode = orderSourceCode;
        return this;
    }
    @JsonProperty("packages")
    public Package[] packages;
    public CalculateRatesResponseBody withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonProperty("rate_response")
    public RatesInformation rateResponse;
    public CalculateRatesResponseBody withRateResponse(RatesInformation rateResponse) {
        this.rateResponse = rateResponse;
        return this;
    }
    @JsonProperty("return_to")
    public Address returnTo;
    public CalculateRatesResponseBody withReturnTo(Address returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public CalculateRatesResponseBody withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public CalculateRatesResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_from")
    public Address shipFrom;
    public CalculateRatesResponseBody withShipFrom(Address shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_to")
    public Address shipTo;
    public CalculateRatesResponseBody withShipTo(Address shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public CalculateRatesResponseBody withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("shipment_status")
    public java.util.Map<String, Object> shipmentStatus;
    public CalculateRatesResponseBody withShipmentStatus(java.util.Map<String, Object> shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public CalculateRatesResponseBody withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("total_weight")
    public CalculateRatesResponseBodyWeight totalWeight;
    public CalculateRatesResponseBody withTotalWeight(CalculateRatesResponseBodyWeight totalWeight) {
        this.totalWeight = totalWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public CalculateRatesResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}