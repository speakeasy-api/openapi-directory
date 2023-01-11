package openapisdk.models.operations;



public class CalendarEventsImportResponse {
    public String contentType;
    public CalendarEventsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public CalendarEventsImportResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public CalendarEventsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}