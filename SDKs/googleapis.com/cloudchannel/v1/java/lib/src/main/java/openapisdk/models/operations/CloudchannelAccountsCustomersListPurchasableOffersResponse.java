package openapisdk.models.operations;



public class CloudchannelAccountsCustomersListPurchasableOffersResponse {
    public String contentType;
    public CloudchannelAccountsCustomersListPurchasableOffersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1ListPurchasableOffersResponse googleCloudChannelV1ListPurchasableOffersResponse;
    public CloudchannelAccountsCustomersListPurchasableOffersResponse withGoogleCloudChannelV1ListPurchasableOffersResponse(openapisdk.models.shared.GoogleCloudChannelV1ListPurchasableOffersResponse googleCloudChannelV1ListPurchasableOffersResponse) {
        this.googleCloudChannelV1ListPurchasableOffersResponse = googleCloudChannelV1ListPurchasableOffersResponse;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersListPurchasableOffersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}