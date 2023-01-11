package openapisdk.models.operations;



public class CloudchannelAccountsReportsRunResponse {
    public String contentType;
    public CloudchannelAccountsReportsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public CloudchannelAccountsReportsRunResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public CloudchannelAccountsReportsRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}