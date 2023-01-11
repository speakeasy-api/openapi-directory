package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsSuspendResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsSuspendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersEntitlementsSuspendResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsSuspendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}