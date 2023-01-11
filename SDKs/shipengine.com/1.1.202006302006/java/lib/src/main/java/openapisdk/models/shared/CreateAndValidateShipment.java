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
 * CreateAndValidateShipment
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
public class CreateAndValidateShipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_validation")
    public AddressValidationResult addressValidation;
    public CreateAndValidateShipment withAddressValidation(AddressValidationResult addressValidation) {
        this.addressValidation = addressValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advanced_options")
    public AdvancedShipmentOptions advancedOptions;
    public CreateAndValidateShipment withAdvancedOptions(AdvancedShipmentOptions advancedOptions) {
        this.advancedOptions = advancedOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public String carrierId;
    public CreateAndValidateShipment withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmation")
    public java.util.Map<String, Object> confirmation;
    public CreateAndValidateShipment withConfirmation(java.util.Map<String, Object> confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CreateAndValidateShipment withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customs")
    public CreateAndValidateShipmentInternationalShipmentOptions customs;
    public CreateAndValidateShipment withCustoms(CreateAndValidateShipmentInternationalShipmentOptions customs) {
        this.customs = customs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;
    public CreateAndValidateShipment withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_order_id")
    public String externalOrderId;
    public CreateAndValidateShipment withExternalOrderId(String externalOrderId) {
        this.externalOrderId = externalOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public String externalShipmentId;
    public CreateAndValidateShipment withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_provider")
    public java.util.Map<String, Object> insuranceProvider;
    public CreateAndValidateShipment withInsuranceProvider(java.util.Map<String, Object> insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ShipmentItem[] items;
    public CreateAndValidateShipment withItems(ShipmentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_at")
    public java.util.Map<String, Object> modifiedAt;
    public CreateAndValidateShipment withModifiedAt(java.util.Map<String, Object> modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_source_code")
    public OrderSourceNameEnum orderSourceCode;
    public CreateAndValidateShipment withOrderSourceCode(OrderSourceNameEnum orderSourceCode) {
        this.orderSourceCode = orderSourceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public CreateAndValidateShipment withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_to")
    public Address returnTo;
    public CreateAndValidateShipment withReturnTo(Address returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public CreateAndValidateShipment withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public CreateAndValidateShipment withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_from")
    public Address shipFrom;
    public CreateAndValidateShipment withShipFrom(Address shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_to")
    public Address shipTo;
    public CreateAndValidateShipment withShipTo(Address shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public CreateAndValidateShipment withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_status")
    public java.util.Map<String, Object> shipmentStatus;
    public CreateAndValidateShipment withShipmentStatus(java.util.Map<String, Object> shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateAndValidateShipment withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_weight")
    public CreateAndValidateShipmentWeight totalWeight;
    public CreateAndValidateShipment withTotalWeight(CreateAndValidateShipmentWeight totalWeight) {
        this.totalWeight = totalWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public CreateAndValidateShipment withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}