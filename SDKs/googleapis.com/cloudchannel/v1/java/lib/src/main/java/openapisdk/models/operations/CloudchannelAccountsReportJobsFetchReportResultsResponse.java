package openapisdk.models.operations;



public class CloudchannelAccountsReportJobsFetchReportResultsResponse {
    public String contentType;
    public CloudchannelAccountsReportJobsFetchReportResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1FetchReportResultsResponse googleCloudChannelV1FetchReportResultsResponse;
    public CloudchannelAccountsReportJobsFetchReportResultsResponse withGoogleCloudChannelV1FetchReportResultsResponse(openapisdk.models.shared.GoogleCloudChannelV1FetchReportResultsResponse googleCloudChannelV1FetchReportResultsResponse) {
        this.googleCloudChannelV1FetchReportResultsResponse = googleCloudChannelV1FetchReportResultsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsReportJobsFetchReportResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}