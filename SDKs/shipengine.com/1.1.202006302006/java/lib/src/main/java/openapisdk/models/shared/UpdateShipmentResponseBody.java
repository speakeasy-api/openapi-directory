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
 * UpdateShipmentResponseBody
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
public class UpdateShipmentResponseBody {
    @JsonProperty("address_validation")
    public AddressValidationResult addressValidation;
    public UpdateShipmentResponseBody withAddressValidation(AddressValidationResult addressValidation) {
        this.addressValidation = addressValidation;
        return this;
    }
    @JsonProperty("advanced_options")
    public AdvancedShipmentOptions advancedOptions;
    public UpdateShipmentResponseBody withAdvancedOptions(AdvancedShipmentOptions advancedOptions) {
        this.advancedOptions = advancedOptions;
        return this;
    }
    @JsonProperty("carrier_id")
    public String carrierId;
    public UpdateShipmentResponseBody withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("confirmation")
    public java.util.Map<String, Object> confirmation;
    public UpdateShipmentResponseBody withConfirmation(java.util.Map<String, Object> confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public UpdateShipmentResponseBody withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("customs")
    public UpdateShipmentResponseBodyInternationalShipmentOptions customs;
    public UpdateShipmentResponseBody withCustoms(UpdateShipmentResponseBodyInternationalShipmentOptions customs) {
        this.customs = customs;
        return this;
    }
    @JsonProperty("errors")
    public String[] errors;
    public UpdateShipmentResponseBody withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_order_id")
    public String externalOrderId;
    public UpdateShipmentResponseBody withExternalOrderId(String externalOrderId) {
        this.externalOrderId = externalOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public String externalShipmentId;
    public UpdateShipmentResponseBody withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonProperty("insurance_provider")
    public java.util.Map<String, Object> insuranceProvider;
    public UpdateShipmentResponseBody withInsuranceProvider(java.util.Map<String, Object> insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ShipmentItem[] items;
    public UpdateShipmentResponseBody withItems(ShipmentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_at")
    public java.util.Map<String, Object> modifiedAt;
    public UpdateShipmentResponseBody withModifiedAt(java.util.Map<String, Object> modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_source_code")
    public OrderSourceNameEnum orderSourceCode;
    public UpdateShipmentResponseBody withOrderSourceCode(OrderSourceNameEnum orderSourceCode) {
        this.orderSourceCode = orderSourceCode;
        return this;
    }
    @JsonProperty("packages")
    public Package[] packages;
    public UpdateShipmentResponseBody withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonProperty("return_to")
    public Address returnTo;
    public UpdateShipmentResponseBody withReturnTo(Address returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonProperty("service_code")
    public String serviceCode;
    public UpdateShipmentResponseBody withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public UpdateShipmentResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("ship_from")
    public Address shipFrom;
    public UpdateShipmentResponseBody withShipFrom(Address shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonProperty("ship_to")
    public Address shipTo;
    public UpdateShipmentResponseBody withShipTo(Address shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public UpdateShipmentResponseBody withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("shipment_status")
    public java.util.Map<String, Object> shipmentStatus;
    public UpdateShipmentResponseBody withShipmentStatus(java.util.Map<String, Object> shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public UpdateShipmentResponseBody withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("total_weight")
    public UpdateShipmentResponseBodyWeight totalWeight;
    public UpdateShipmentResponseBody withTotalWeight(UpdateShipmentResponseBodyWeight totalWeight) {
        this.totalWeight = totalWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public UpdateShipmentResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}