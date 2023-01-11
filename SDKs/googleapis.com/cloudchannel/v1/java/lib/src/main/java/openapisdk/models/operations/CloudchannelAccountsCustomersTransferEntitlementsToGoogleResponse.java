package openapisdk.models.operations;



public class CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse {
    public String contentType;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}