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
 * CreateLabelRequestBodyPartialShipmentInput
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
public class CreateLabelRequestBodyPartialShipmentInput {
    @JsonProperty("advanced_options")
    public AdvancedShipmentOptions advancedOptions;
    public CreateLabelRequestBodyPartialShipmentInput withAdvancedOptions(AdvancedShipmentOptions advancedOptions) {
        this.advancedOptions = advancedOptions;
        return this;
    }
    @JsonProperty("carrier_id")
    public String carrierId;
    public CreateLabelRequestBodyPartialShipmentInput withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("confirmation")
    public java.util.Map<String, Object> confirmation;
    public CreateLabelRequestBodyPartialShipmentInput withConfirmation(java.util.Map<String, Object> confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonProperty("customs")
    public CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput customs;
    public CreateLabelRequestBodyPartialShipmentInput withCustoms(CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput customs) {
        this.customs = customs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_order_id")
    public String externalOrderId;
    public CreateLabelRequestBodyPartialShipmentInput withExternalOrderId(String externalOrderId) {
        this.externalOrderId = externalOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public String externalShipmentId;
    public CreateLabelRequestBodyPartialShipmentInput withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonProperty("insurance_provider")
    public java.util.Map<String, Object> insuranceProvider;
    public CreateLabelRequestBodyPartialShipmentInput withInsuranceProvider(java.util.Map<String, Object> insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ShipmentItem[] items;
    public CreateLabelRequestBodyPartialShipmentInput withItems(ShipmentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_source_code")
    public OrderSourceNameEnum orderSourceCode;
    public CreateLabelRequestBodyPartialShipmentInput withOrderSourceCode(OrderSourceNameEnum orderSourceCode) {
        this.orderSourceCode = orderSourceCode;
        return this;
    }
    @JsonProperty("packages")
    public PackageInput[] packages;
    public CreateLabelRequestBodyPartialShipmentInput withPackages(PackageInput[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonProperty("return_to")
    public Address returnTo;
    public CreateLabelRequestBodyPartialShipmentInput withReturnTo(Address returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonProperty("service_code")
    public String serviceCode;
    public CreateLabelRequestBodyPartialShipmentInput withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public CreateLabelRequestBodyPartialShipmentInput withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("ship_from")
    public Address shipFrom;
    public CreateLabelRequestBodyPartialShipmentInput withShipFrom(Address shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonProperty("ship_to")
    public Address shipTo;
    public CreateLabelRequestBodyPartialShipmentInput withShipTo(Address shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public CreateLabelRequestBodyPartialShipmentInput withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}