package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RunReportJobRequest
 * Request message for CloudChannelReportsService.RunReportJob.
**/
public class GoogleCloudChannelV1RunReportJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public GoogleCloudChannelV1DateRange dateRange;
    public GoogleCloudChannelV1RunReportJobRequest withDateRange(GoogleCloudChannelV1DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudChannelV1RunReportJobRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1RunReportJobRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}