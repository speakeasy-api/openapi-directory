package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersPatchResponse {
    public String contentType;
    public EventarcProjectsLocationsTriggersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public EventarcProjectsLocationsTriggersPatchResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsTriggersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}