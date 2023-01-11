package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsChangeOfferResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}