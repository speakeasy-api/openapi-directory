package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsActivateResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersEntitlementsActivateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}