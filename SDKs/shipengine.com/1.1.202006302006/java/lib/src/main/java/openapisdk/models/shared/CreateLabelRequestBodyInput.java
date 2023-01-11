package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLabelRequestBodyInput
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
public class CreateLabelRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_event")
    public LabelChargeEventEnum chargeEvent;
    public CreateLabelRequestBodyInput withChargeEvent(LabelChargeEventEnum chargeEvent) {
        this.chargeEvent = chargeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_return_label")
    public Boolean isReturnLabel;
    public CreateLabelRequestBodyInput withIsReturnLabel(Boolean isReturnLabel) {
        this.isReturnLabel = isReturnLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_download_type")
    public java.util.Map<String, Object> labelDownloadType;
    public CreateLabelRequestBodyInput withLabelDownloadType(java.util.Map<String, Object> labelDownloadType) {
        this.labelDownloadType = labelDownloadType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateLabelRequestBodyInput withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_image_id")
    public java.util.Map<String, Object> labelImageId;
    public CreateLabelRequestBodyInput withLabelImageId(java.util.Map<String, Object> labelImageId) {
        this.labelImageId = labelImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateLabelRequestBodyInput withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_label_id")
    public java.util.Map<String, Object> outboundLabelId;
    public CreateLabelRequestBodyInput withOutboundLabelId(java.util.Map<String, Object> outboundLabelId) {
        this.outboundLabelId = outboundLabelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rma_number")
    public String rmaNumber;
    public CreateLabelRequestBodyInput withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
    @JsonProperty("shipment")
    public CreateLabelRequestBodyPartialShipmentInput shipment;
    public CreateLabelRequestBodyInput withShipment(CreateLabelRequestBodyPartialShipmentInput shipment) {
        this.shipment = shipment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test_label")
    public Boolean testLabel;
    public CreateLabelRequestBodyInput withTestLabel(Boolean testLabel) {
        this.testLabel = testLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validate_address")
    public java.util.Map<String, Object> validateAddress;
    public CreateLabelRequestBodyInput withValidateAddress(java.util.Map<String, Object> validateAddress) {
        this.validateAddress = validateAddress;
        return this;
    }
}