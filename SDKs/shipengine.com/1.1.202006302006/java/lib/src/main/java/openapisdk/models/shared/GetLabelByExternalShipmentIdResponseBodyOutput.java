package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLabelByExternalShipmentIdResponseBodyOutput
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
public class GetLabelByExternalShipmentIdResponseBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch_id")
    public java.util.Map<String, Object> batchId;
    public GetLabelByExternalShipmentIdResponseBodyOutput withBatchId(java.util.Map<String, Object> batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_code")
    public java.util.Map<String, Object> carrierCode;
    public GetLabelByExternalShipmentIdResponseBodyOutput withCarrierCode(java.util.Map<String, Object> carrierCode) {
        this.carrierCode = carrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetLabelByExternalShipmentIdResponseBodyOutput withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_event")
    public LabelChargeEventEnum chargeEvent;
    public GetLabelByExternalShipmentIdResponseBodyOutput withChargeEvent(LabelChargeEventEnum chargeEvent) {
        this.chargeEvent = chargeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public GetLabelByExternalShipmentIdResponseBodyOutput withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_download")
    public GetLabelByExternalShipmentIdResponseBodyOptionalLink formDownload;
    public GetLabelByExternalShipmentIdResponseBodyOutput withFormDownload(GetLabelByExternalShipmentIdResponseBodyOptionalLink formDownload) {
        this.formDownload = formDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_claim")
    public GetLabelByExternalShipmentIdResponseBodyOptionalLink insuranceClaim;
    public GetLabelByExternalShipmentIdResponseBodyOutput withInsuranceClaim(GetLabelByExternalShipmentIdResponseBodyOptionalLink insuranceClaim) {
        this.insuranceClaim = insuranceClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_cost")
    public GetLabelByExternalShipmentIdResponseBodyMonetaryValue insuranceCost;
    public GetLabelByExternalShipmentIdResponseBodyOutput withInsuranceCost(GetLabelByExternalShipmentIdResponseBodyMonetaryValue insuranceCost) {
        this.insuranceCost = insuranceCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_international")
    public Boolean isInternational;
    public GetLabelByExternalShipmentIdResponseBodyOutput withIsInternational(Boolean isInternational) {
        this.isInternational = isInternational;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_return_label")
    public Boolean isReturnLabel;
    public GetLabelByExternalShipmentIdResponseBodyOutput withIsReturnLabel(Boolean isReturnLabel) {
        this.isReturnLabel = isReturnLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_download")
    public GetLabelByExternalShipmentIdResponseBodyLabelDownload labelDownload;
    public GetLabelByExternalShipmentIdResponseBodyOutput withLabelDownload(GetLabelByExternalShipmentIdResponseBodyLabelDownload labelDownload) {
        this.labelDownload = labelDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public GetLabelByExternalShipmentIdResponseBodyOutput withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public java.util.Map<String, Object> labelId;
    public GetLabelByExternalShipmentIdResponseBodyOutput withLabelId(java.util.Map<String, Object> labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_image_id")
    public java.util.Map<String, Object> labelImageId;
    public GetLabelByExternalShipmentIdResponseBodyOutput withLabelImageId(java.util.Map<String, Object> labelImageId) {
        this.labelImageId = labelImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public GetLabelByExternalShipmentIdResponseBodyOutput withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_code")
    public java.util.Map<String, Object> packageCode;
    public GetLabelByExternalShipmentIdResponseBodyOutput withPackageCode(java.util.Map<String, Object> packageCode) {
        this.packageCode = packageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public GetLabelByExternalShipmentIdResponseBodyOutput withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rma_number")
    public String rmaNumber;
    public GetLabelByExternalShipmentIdResponseBodyOutput withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_code")
    public java.util.Map<String, Object> serviceCode;
    public GetLabelByExternalShipmentIdResponseBodyOutput withServiceCode(java.util.Map<String, Object> serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ship_date")
    public java.util.Map<String, Object> shipDate;
    public GetLabelByExternalShipmentIdResponseBodyOutput withShipDate(java.util.Map<String, Object> shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_cost")
    public GetLabelByExternalShipmentIdResponseBodyMonetaryValue shipmentCost;
    public GetLabelByExternalShipmentIdResponseBodyOutput withShipmentCost(GetLabelByExternalShipmentIdResponseBodyMonetaryValue shipmentCost) {
        this.shipmentCost = shipmentCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public GetLabelByExternalShipmentIdResponseBodyOutput withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public GetLabelByExternalShipmentIdResponseBodyOutput withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackable")
    public Boolean trackable;
    public GetLabelByExternalShipmentIdResponseBodyOutput withTrackable(Boolean trackable) {
        this.trackable = trackable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_number")
    public String trackingNumber;
    public GetLabelByExternalShipmentIdResponseBodyOutput withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_status")
    public java.util.Map<String, Object> trackingStatus;
    public GetLabelByExternalShipmentIdResponseBodyOutput withTrackingStatus(java.util.Map<String, Object> trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided")
    public Boolean voided;
    public GetLabelByExternalShipmentIdResponseBodyOutput withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided_at")
    public java.util.Map<String, Object> voidedAt;
    public GetLabelByExternalShipmentIdResponseBodyOutput withVoidedAt(java.util.Map<String, Object> voidedAt) {
        this.voidedAt = voidedAt;
        return this;
    }
}