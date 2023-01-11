package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsLookupOfferResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsLookupOfferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudChannelV1Offer googleCloudChannelV1Offer;
    public CloudchannelAccountsCustomersEntitlementsLookupOfferResponse withGoogleCloudChannelV1Offer(openapisdk.models.shared.GoogleCloudChannelV1Offer googleCloudChannelV1Offer) {
        this.googleCloudChannelV1Offer = googleCloudChannelV1Offer;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsLookupOfferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}