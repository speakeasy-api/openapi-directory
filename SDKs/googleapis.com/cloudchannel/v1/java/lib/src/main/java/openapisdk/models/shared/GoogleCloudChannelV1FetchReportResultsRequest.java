package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1FetchReportResultsRequest
 * Request message for CloudChannelReportsService.FetchReportResults.
**/
public class GoogleCloudChannelV1FetchReportResultsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudChannelV1FetchReportResultsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudChannelV1FetchReportResultsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}