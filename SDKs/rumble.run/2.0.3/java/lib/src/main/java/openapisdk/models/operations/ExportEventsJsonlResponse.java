package openapisdk.models.operations;



public class ExportEventsJsonlResponse {
    public String contentType;
    public ExportEventsJsonlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ExportEventsJsonlResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public ExportEventsJsonlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}