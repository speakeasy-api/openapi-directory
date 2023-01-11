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
 * PartialShipmentInput
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
public class PartialShipmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advanced_options")
    public AdvancedShipmentOptions advancedOptions;
    public PartialShipmentInput withAdvancedOptions(AdvancedShipmentOptions advancedOptions) {
        this.advancedOptions = advancedOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public String carrierId;
    public PartialShipmentInput withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmation")
    public java.util.Map<String, Object> confirmation;
    public PartialShipmentInput withConfirmation(java.util.Map<String, Object> confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customs")
    public PartialShipmentInternationalShipmentOptionsInput customs;
    public PartialShipmentInput withCustoms(PartialShipmentInternationalShipmentOptionsInput customs) {
        this.customs = customs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_order_id")
    public String externalOrderId;
    public PartialShipmentInput withExternalOrderId(String externalOrderId) {
        this.externalOrderId = externalOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public String externalShipmentId;
    public PartialShipmentInput withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_provider")
    public java.util.Map<String, Object> insuranceProvider;
    public PartialShipmentInput withInsuranceProvider(java.util.Map<String, Object> insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ShipmentItem[] items;
    public PartialShipmentInput withItems(ShipmentItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_source_code")
    public OrderSourceNameEnum orderSourceCode;
    public PartialShipmentInput withOrderSourceCode(OrderSourceNameEnum orderSourceCode) {
        this.orderSourceCode = orderSourceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public PackageInput[] packages;
    public PartialShipmentInput withPackages(PackageInput[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_to")
    public Address returnTo;
    public PartialShipmentInput withReturnTo(Address returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public String serviceCode;
    public PartialShipmentInput withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public PartialShipmentInput withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_from")
    public Address shipFrom;
    public PartialShipmentInput withShipFrom(Address shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_to")
    public Address shipTo;
    public PartialShipmentInput withShipTo(Address shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public PartialShipmentInput withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}