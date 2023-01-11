package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListReportsResponse
 * Response message for CloudChannelReportsService.ListReports.
**/
public class GoogleCloudChannelV1ListReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reports")
    public GoogleCloudChannelV1Report[] reports;
    public GoogleCloudChannelV1ListReportsResponse withReports(GoogleCloudChannelV1Report[] reports) {
        this.reports = reports;
        return this;
    }
}