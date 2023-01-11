package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListReportTypesResponse
 * Response message for ReportingService.ListReportTypes.
**/
public class ListReportTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListReportTypesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTypes")
    public ReportType[] reportTypes;
    public ListReportTypesResponse withReportTypes(ReportType[] reportTypes) {
        this.reportTypes = reportTypes;
        return this;
    }
}