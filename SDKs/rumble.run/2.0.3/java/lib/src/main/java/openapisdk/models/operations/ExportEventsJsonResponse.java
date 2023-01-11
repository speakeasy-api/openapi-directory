package openapisdk.models.operations;



public class ExportEventsJsonResponse {
    public String contentType;
    public ExportEventsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ExportEventsJsonResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public ExportEventsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}