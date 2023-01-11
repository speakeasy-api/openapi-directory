package openapisdk.models.operations;



public class CloudchannelAccountsCustomersListPurchasableSkusResponse {
    public String contentType;
    public CloudchannelAccountsCustomersListPurchasableSkusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListPurchasableSkusResponse googleCloudChannelV1ListPurchasableSkusResponse;
    public CloudchannelAccountsCustomersListPurchasableSkusResponse withGoogleCloudChannelV1ListPurchasableSkusResponse(openapisdk.models.shared.GoogleCloudChannelV1ListPurchasableSkusResponse googleCloudChannelV1ListPurchasableSkusResponse) {
        this.googleCloudChannelV1ListPurchasableSkusResponse = googleCloudChannelV1ListPurchasableSkusResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersListPurchasableSkusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}