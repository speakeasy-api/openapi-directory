package openapisdk.models.operations;



public class CloudchannelAccountsCustomersTransferEntitlementsResponse {
    public String contentType;
    public CloudchannelAccountsCustomersTransferEntitlementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersTransferEntitlementsResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersTransferEntitlementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}