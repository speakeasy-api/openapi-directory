package openapisdk.models.operations;



public class CloudchannelAccountsCheckCloudIdentityAccountsExistResponse {
    public String contentType;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse googleCloudChannelV1CheckCloudIdentityAccountsExistResponse;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistResponse withGoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse(openapisdk.models.shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse googleCloudChannelV1CheckCloudIdentityAccountsExistResponse) {
        this.googleCloudChannelV1CheckCloudIdentityAccountsExistResponse = googleCloudChannelV1CheckCloudIdentityAccountsExistResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}