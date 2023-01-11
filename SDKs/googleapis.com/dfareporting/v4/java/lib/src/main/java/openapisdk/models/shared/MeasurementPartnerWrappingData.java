package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeasurementPartnerWrappingData
 * Placement tag wrapping
**/
public class MeasurementPartnerWrappingData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkStatus")
    public MeasurementPartnerWrappingDataLinkStatusEnum linkStatus;
    public MeasurementPartnerWrappingData withLinkStatus(MeasurementPartnerWrappingDataLinkStatusEnum linkStatus) {
        this.linkStatus = linkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementPartner")
    public MeasurementPartnerWrappingDataMeasurementPartnerEnum measurementPartner;
    public MeasurementPartnerWrappingData withMeasurementPartner(MeasurementPartnerWrappingDataMeasurementPartnerEnum measurementPartner) {
        this.measurementPartner = measurementPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagWrappingMode")
    public MeasurementPartnerWrappingDataTagWrappingModeEnum tagWrappingMode;
    public MeasurementPartnerWrappingData withTagWrappingMode(MeasurementPartnerWrappingDataTagWrappingModeEnum tagWrappingMode) {
        this.tagWrappingMode = tagWrappingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrappedTag")
    public String wrappedTag;
    public MeasurementPartnerWrappingData withWrappedTag(String wrappedTag) {
        this.wrappedTag = wrappedTag;
        return this;
    }
}