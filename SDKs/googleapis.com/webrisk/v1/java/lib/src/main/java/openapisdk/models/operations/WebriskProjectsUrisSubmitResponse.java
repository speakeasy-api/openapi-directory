package openapisdk.models.operations;



public class WebriskProjectsUrisSubmitResponse {
    public String contentType;
    public WebriskProjectsUrisSubmitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public WebriskProjectsUrisSubmitResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public WebriskProjectsUrisSubmitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}