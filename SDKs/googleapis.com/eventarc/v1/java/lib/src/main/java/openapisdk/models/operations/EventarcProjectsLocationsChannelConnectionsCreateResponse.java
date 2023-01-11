package openapisdk.models.operations;



public class EventarcProjectsLocationsChannelConnectionsCreateResponse {
    public String contentType;
    public EventarcProjectsLocationsChannelConnectionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public EventarcProjectsLocationsChannelConnectionsCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsChannelConnectionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}