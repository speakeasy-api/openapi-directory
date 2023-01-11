package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportsConfiguration
 * Reporting Configuration
**/
public class ReportsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposureToConversionEnabled")
    public Boolean exposureToConversionEnabled;
    public ReportsConfiguration withExposureToConversionEnabled(Boolean exposureToConversionEnabled) {
        this.exposureToConversionEnabled = exposureToConversionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookbackConfiguration")
    public LookbackConfiguration lookbackConfiguration;
    public ReportsConfiguration withLookbackConfiguration(LookbackConfiguration lookbackConfiguration) {
        this.lookbackConfiguration = lookbackConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportGenerationTimeZoneId")
    public String reportGenerationTimeZoneId;
    public ReportsConfiguration withReportGenerationTimeZoneId(String reportGenerationTimeZoneId) {
        this.reportGenerationTimeZoneId = reportGenerationTimeZoneId;
        return this;
    }
}