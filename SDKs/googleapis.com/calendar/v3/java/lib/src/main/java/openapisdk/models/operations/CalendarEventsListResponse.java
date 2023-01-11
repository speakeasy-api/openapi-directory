package openapisdk.models.operations;



public class CalendarEventsListResponse {
    public String contentType;
    public CalendarEventsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Events events;
    public CalendarEventsListResponse withEvents(openapisdk.models.shared.Events events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public CalendarEventsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}