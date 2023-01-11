package openapisdk.models.operations;



public class CloudchannelAccountsCustomersProvisionCloudIdentityResponse {
    public String contentType;
    public CloudchannelAccountsCustomersProvisionCloudIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersProvisionCloudIdentityResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersProvisionCloudIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}