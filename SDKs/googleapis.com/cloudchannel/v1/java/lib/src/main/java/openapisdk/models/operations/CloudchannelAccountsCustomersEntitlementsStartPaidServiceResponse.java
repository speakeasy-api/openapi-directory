package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}