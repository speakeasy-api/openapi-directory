package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLabelFromRateRequestBody
 * A purchase label without shipment resource
**/
public class CreateLabelFromRateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_download_type")
    public LabelDownloadTypeEnum labelDownloadType;
    public CreateLabelFromRateRequestBody withLabelDownloadType(LabelDownloadTypeEnum labelDownloadType) {
        this.labelDownloadType = labelDownloadType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public CreateLabelFromRateRequestBody withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public CreateLabelFromRateRequestBody withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validate_address")
    public ValidateAddressEnum validateAddress;
    public CreateLabelFromRateRequestBody withValidateAddress(ValidateAddressEnum validateAddress) {
        this.validateAddress = validateAddress;
        return this;
    }
}