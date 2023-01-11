package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLabelFromRateResponseBodyOutput
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
public class CreateLabelFromRateResponseBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public CreateLabelFromRateResponseBodyOutput withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public java.util.Map<String, Object> carrierCode;
    public CreateLabelFromRateResponseBodyOutput withCarrierCode(java.util.Map<String, Object> carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public CreateLabelFromRateResponseBodyOutput withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_event")
    public LabelChargeEventEnum chargeEvent;
    public CreateLabelFromRateResponseBodyOutput withChargeEvent(LabelChargeEventEnum chargeEvent) {
        this.chargeEvent = chargeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public CreateLabelFromRateResponseBodyOutput withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_download")
    public CreateLabelFromRateResponseBodyOptionalLink formDownload;
    public CreateLabelFromRateResponseBodyOutput withFormDownload(CreateLabelFromRateResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_claim")
    public CreateLabelFromRateResponseBodyOptionalLink insuranceClaim;
    public CreateLabelFromRateResponseBodyOutput withInsuranceClaim(CreateLabelFromRateResponseBodyOptionalLink insuranceClaim) {
        this.insuranceClaim = insuranceClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_cost")
    public CreateLabelFromRateResponseBodyMonetaryValue insuranceCost;
    public CreateLabelFromRateResponseBodyOutput withInsuranceCost(CreateLabelFromRateResponseBodyMonetaryValue insuranceCost) {
        this.insuranceCost = insuranceCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_international")
    public Boolean isInternational;
    public CreateLabelFromRateResponseBodyOutput withIsInternational(Boolean isInternational) {
        this.isInternational = isInternational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_return_label")
    public Boolean isReturnLabel;
    public CreateLabelFromRateResponseBodyOutput withIsReturnLabel(Boolean isReturnLabel) {
        this.isReturnLabel = isReturnLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_download")
    public CreateLabelFromRateResponseBodyLabelDownload labelDownload;
    public CreateLabelFromRateResponseBodyOutput withLabelDownload(CreateLabelFromRateResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateLabelFromRateResponseBodyOutput withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public java.util.Map<String, Object> labelId;
    public CreateLabelFromRateResponseBodyOutput withLabelId(java.util.Map<String, Object> labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_image_id")
    public java.util.Map<String, Object> labelImageId;
    public CreateLabelFromRateResponseBodyOutput withLabelImageId(java.util.Map<String, Object> labelImageId) {
        this.labelImageId = labelImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateLabelFromRateResponseBodyOutput withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_code")
    public java.util.Map<String, Object> packageCode;
    public CreateLabelFromRateResponseBodyOutput withPackageCode(java.util.Map<String, Object> packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public CreateLabelFromRateResponseBodyOutput withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rma_number")
    public String rmaNumber;
    public CreateLabelFromRateResponseBodyOutput withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public java.util.Map<String, Object> serviceCode;
    public CreateLabelFromRateResponseBodyOutput withServiceCode(java.util.Map<String, Object> serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_date")
    public java.util.Map<String, Object> shipDate;
    public CreateLabelFromRateResponseBodyOutput withShipDate(java.util.Map<String, Object> shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_cost")
    public CreateLabelFromRateResponseBodyMonetaryValue shipmentCost;
    public CreateLabelFromRateResponseBodyOutput withShipmentCost(CreateLabelFromRateResponseBodyMonetaryValue shipmentCost) {
        this.shipmentCost = shipmentCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public CreateLabelFromRateResponseBodyOutput withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public CreateLabelFromRateResponseBodyOutput withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackable")
    public Boolean trackable;
    public CreateLabelFromRateResponseBodyOutput withTrackable(Boolean trackable) {
        this.trackable = trackable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_number")
    public String trackingNumber;
    public CreateLabelFromRateResponseBodyOutput withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_status")
    public java.util.Map<String, Object> trackingStatus;
    public CreateLabelFromRateResponseBodyOutput withTrackingStatus(java.util.Map<String, Object> trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided")
    public Boolean voided;
    public CreateLabelFromRateResponseBodyOutput withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided_at")
    public java.util.Map<String, Object> voidedAt;
    public CreateLabelFromRateResponseBodyOutput withVoidedAt(java.util.Map<String, Object> voidedAt) {
        this.voidedAt = voidedAt;
        return this;
    }
}