package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLabelFromShipmentResponseBodyOutput
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
public class CreateLabelFromShipmentResponseBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public CreateLabelFromShipmentResponseBodyOutput withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public java.util.Map<String, Object> carrierCode;
    public CreateLabelFromShipmentResponseBodyOutput withCarrierCode(java.util.Map<String, Object> carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public CreateLabelFromShipmentResponseBodyOutput withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_event")
    public LabelChargeEventEnum chargeEvent;
    public CreateLabelFromShipmentResponseBodyOutput withChargeEvent(LabelChargeEventEnum chargeEvent) {
        this.chargeEvent = chargeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CreateLabelFromShipmentResponseBodyOutput withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_download")
    public CreateLabelFromShipmentResponseBodyOptionalLink formDownload;
    public CreateLabelFromShipmentResponseBodyOutput withFormDownload(CreateLabelFromShipmentResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_claim")
    public CreateLabelFromShipmentResponseBodyOptionalLink insuranceClaim;
    public CreateLabelFromShipmentResponseBodyOutput withInsuranceClaim(CreateLabelFromShipmentResponseBodyOptionalLink insuranceClaim) {
        this.insuranceClaim = insuranceClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_cost")
    public CreateLabelFromShipmentResponseBodyMonetaryValue insuranceCost;
    public CreateLabelFromShipmentResponseBodyOutput withInsuranceCost(CreateLabelFromShipmentResponseBodyMonetaryValue insuranceCost) {
        this.insuranceCost = insuranceCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_international")
    public Boolean isInternational;
    public CreateLabelFromShipmentResponseBodyOutput withIsInternational(Boolean isInternational) {
        this.isInternational = isInternational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_return_label")
    public Boolean isReturnLabel;
    public CreateLabelFromShipmentResponseBodyOutput withIsReturnLabel(Boolean isReturnLabel) {
        this.isReturnLabel = isReturnLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_download")
    public CreateLabelFromShipmentResponseBodyLabelDownload labelDownload;
    public CreateLabelFromShipmentResponseBodyOutput withLabelDownload(CreateLabelFromShipmentResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateLabelFromShipmentResponseBodyOutput withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public java.util.Map<String, Object> labelId;
    public CreateLabelFromShipmentResponseBodyOutput withLabelId(java.util.Map<String, Object> labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_image_id")
    public java.util.Map<String, Object> labelImageId;
    public CreateLabelFromShipmentResponseBodyOutput withLabelImageId(java.util.Map<String, Object> labelImageId) {
        this.labelImageId = labelImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateLabelFromShipmentResponseBodyOutput withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_code")
    public java.util.Map<String, Object> packageCode;
    public CreateLabelFromShipmentResponseBodyOutput withPackageCode(java.util.Map<String, Object> packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public CreateLabelFromShipmentResponseBodyOutput withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rma_number")
    public String rmaNumber;
    public CreateLabelFromShipmentResponseBodyOutput withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public java.util.Map<String, Object> serviceCode;
    public CreateLabelFromShipmentResponseBodyOutput withServiceCode(java.util.Map<String, Object> serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_date")
    public java.util.Map<String, Object> shipDate;
    public CreateLabelFromShipmentResponseBodyOutput withShipDate(java.util.Map<String, Object> shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_cost")
    public CreateLabelFromShipmentResponseBodyMonetaryValue shipmentCost;
    public CreateLabelFromShipmentResponseBodyOutput withShipmentCost(CreateLabelFromShipmentResponseBodyMonetaryValue shipmentCost) {
        this.shipmentCost = shipmentCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public CreateLabelFromShipmentResponseBodyOutput withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public CreateLabelFromShipmentResponseBodyOutput withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackable")
    public Boolean trackable;
    public CreateLabelFromShipmentResponseBodyOutput withTrackable(Boolean trackable) {
        this.trackable = trackable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_number")
    public String trackingNumber;
    public CreateLabelFromShipmentResponseBodyOutput withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_status")
    public java.util.Map<String, Object> trackingStatus;
    public CreateLabelFromShipmentResponseBodyOutput withTrackingStatus(java.util.Map<String, Object> trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided")
    public Boolean voided;
    public CreateLabelFromShipmentResponseBodyOutput withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided_at")
    public java.util.Map<String, Object> voidedAt;
    public CreateLabelFromShipmentResponseBodyOutput withVoidedAt(java.util.Map<String, Object> voidedAt) {
        this.voidedAt = voidedAt;
        return this;
    }
}