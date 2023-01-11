package openapisdk.models.operations;



public class CloudchannelAccountsReportsListResponse {
    public String contentType;
    public CloudchannelAccountsReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListReportsResponse googleCloudChannelV1ListReportsResponse;
    public CloudchannelAccountsReportsListResponse withGoogleCloudChannelV1ListReportsResponse(openapisdk.models.shared.GoogleCloudChannelV1ListReportsResponse googleCloudChannelV1ListReportsResponse) {
        this.googleCloudChannelV1ListReportsResponse = googleCloudChannelV1ListReportsResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}