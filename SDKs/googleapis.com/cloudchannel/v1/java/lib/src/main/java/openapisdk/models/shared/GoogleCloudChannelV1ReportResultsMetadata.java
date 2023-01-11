package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ReportResultsMetadata
 * The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
**/
public class GoogleCloudChannelV1ReportResultsMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public GoogleCloudChannelV1DateRange dateRange;
    public GoogleCloudChannelV1ReportResultsMetadata withDateRange(GoogleCloudChannelV1DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precedingDateRange")
    public GoogleCloudChannelV1DateRange precedingDateRange;
    public GoogleCloudChannelV1ReportResultsMetadata withPrecedingDateRange(GoogleCloudChannelV1DateRange precedingDateRange) {
        this.precedingDateRange = precedingDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report")
    public GoogleCloudChannelV1Report report;
    public GoogleCloudChannelV1ReportResultsMetadata withReport(GoogleCloudChannelV1Report report) {
        this.report = report;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public String rowCount;
    public GoogleCloudChannelV1ReportResultsMetadata withRowCount(String rowCount) {
        this.rowCount = rowCount;
        return this;
    }
}