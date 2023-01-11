package openapisdk.models.operations;



public class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse {
    public String contentType;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}