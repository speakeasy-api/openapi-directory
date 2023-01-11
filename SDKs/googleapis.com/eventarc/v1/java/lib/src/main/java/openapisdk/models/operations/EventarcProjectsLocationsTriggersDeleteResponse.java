package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersDeleteResponse {
    public String contentType;
    public EventarcProjectsLocationsTriggersDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public EventarcProjectsLocationsTriggersDeleteResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsTriggersDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}