package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportHeader
 * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
**/
public class ReportHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportHeader withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizationSettings")
    public LocalizationSettings localizationSettings;
    public ReportHeader withLocalizationSettings(LocalizationSettings localizationSettings) {
        this.localizationSettings = localizationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingTimeZone")
    public String reportingTimeZone;
    public ReportHeader withReportingTimeZone(String reportingTimeZone) {
        this.reportingTimeZone = reportingTimeZone;
        return this;
    }
}