package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateLabelResponseBodyOutput
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
public class CreateLabelResponseBodyOutput {
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public CreateLabelResponseBodyOutput withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonProperty("carrier_code")
    public java.util.Map<String, Object> carrierCode;
    public CreateLabelResponseBodyOutput withCarrierCode(java.util.Map<String, Object> carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public CreateLabelResponseBodyOutput withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("charge_event")
    public LabelChargeEventEnum chargeEvent;
    public CreateLabelResponseBodyOutput withChargeEvent(LabelChargeEventEnum chargeEvent) {
        this.chargeEvent = chargeEvent;
        return this;
    }
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CreateLabelResponseBodyOutput withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("form_download")
    public CreateLabelResponseBodyOptionalLink formDownload;
    public CreateLabelResponseBodyOutput withFormDownload(CreateLabelResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonProperty("insurance_claim")
    public CreateLabelResponseBodyOptionalLink insuranceClaim;
    public CreateLabelResponseBodyOutput withInsuranceClaim(CreateLabelResponseBodyOptionalLink insuranceClaim) {
        this.insuranceClaim = insuranceClaim;
        return this;
    }
    @JsonProperty("insurance_cost")
    public CreateLabelResponseBodyMonetaryValue insuranceCost;
    public CreateLabelResponseBodyOutput withInsuranceCost(CreateLabelResponseBodyMonetaryValue insuranceCost) {
        this.insuranceCost = insuranceCost;
        return this;
    }
    @JsonProperty("is_international")
    public Boolean isInternational;
    public CreateLabelResponseBodyOutput withIsInternational(Boolean isInternational) {
        this.isInternational = isInternational;
        return this;
    }
    @JsonProperty("is_return_label")
    public Boolean isReturnLabel;
    public CreateLabelResponseBodyOutput withIsReturnLabel(Boolean isReturnLabel) {
        this.isReturnLabel = isReturnLabel;
        return this;
    }
    @JsonProperty("label_download")
    public CreateLabelResponseBodyLabelDownload labelDownload;
    public CreateLabelResponseBodyOutput withLabelDownload(CreateLabelResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateLabelResponseBodyOutput withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonProperty("label_id")
    public java.util.Map<String, Object> labelId;
    public CreateLabelResponseBodyOutput withLabelId(java.util.Map<String, Object> labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonProperty("label_image_id")
    public java.util.Map<String, Object> labelImageId;
    public CreateLabelResponseBodyOutput withLabelImageId(java.util.Map<String, Object> labelImageId) {
        this.labelImageId = labelImageId;
        return this;
    }
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateLabelResponseBodyOutput withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonProperty("package_code")
    public java.util.Map<String, Object> packageCode;
    public CreateLabelResponseBodyOutput withPackageCode(java.util.Map<String, Object> packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonProperty("packages")
    public Package[] packages;
    public CreateLabelResponseBodyOutput withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonProperty("rma_number")
    public String rmaNumber;
    public CreateLabelResponseBodyOutput withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
    @JsonProperty("service_code")
    public java.util.Map<String, Object> serviceCode;
    public CreateLabelResponseBodyOutput withServiceCode(java.util.Map<String, Object> serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonProperty("ship_date")
    public java.util.Map<String, Object> shipDate;
    public CreateLabelResponseBodyOutput withShipDate(java.util.Map<String, Object> shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("shipment_cost")
    public CreateLabelResponseBodyMonetaryValue shipmentCost;
    public CreateLabelResponseBodyOutput withShipmentCost(CreateLabelResponseBodyMonetaryValue shipmentCost) {
        this.shipmentCost = shipmentCost;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public CreateLabelResponseBodyOutput withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public CreateLabelResponseBodyOutput withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonProperty("trackable")
    public Boolean trackable;
    public CreateLabelResponseBodyOutput withTrackable(Boolean trackable) {
        this.trackable = trackable;
        return this;
    }
    @JsonProperty("tracking_number")
    public String trackingNumber;
    public CreateLabelResponseBodyOutput withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonProperty("tracking_status")
    public java.util.Map<String, Object> trackingStatus;
    public CreateLabelResponseBodyOutput withTrackingStatus(java.util.Map<String, Object> trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonProperty("voided")
    public Boolean voided;
    public CreateLabelResponseBodyOutput withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
    @JsonProperty("voided_at")
    public java.util.Map<String, Object> voidedAt;
    public CreateLabelResponseBodyOutput withVoidedAt(java.util.Map<String, Object> voidedAt) {
        this.voidedAt = voidedAt;
        return this;
    }
}