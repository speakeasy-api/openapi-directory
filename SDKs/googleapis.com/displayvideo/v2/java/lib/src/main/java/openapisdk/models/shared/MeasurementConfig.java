package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeasurementConfig
 * Measurement settings of a partner.
**/
public class MeasurementConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dv360ToCmCostReportingEnabled")
    public Boolean dv360ToCmCostReportingEnabled;
    public MeasurementConfig withDv360ToCmCostReportingEnabled(Boolean dv360ToCmCostReportingEnabled) {
        this.dv360ToCmCostReportingEnabled = dv360ToCmCostReportingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dv360ToCmDataSharingEnabled")
    public Boolean dv360ToCmDataSharingEnabled;
    public MeasurementConfig withDv360ToCmDataSharingEnabled(Boolean dv360ToCmDataSharingEnabled) {
        this.dv360ToCmDataSharingEnabled = dv360ToCmDataSharingEnabled;
        return this;
    }
}