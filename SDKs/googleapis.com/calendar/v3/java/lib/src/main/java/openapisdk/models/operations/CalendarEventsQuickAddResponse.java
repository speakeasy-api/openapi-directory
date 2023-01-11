package openapisdk.models.operations;



public class CalendarEventsQuickAddResponse {
    public String contentType;
    public CalendarEventsQuickAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public CalendarEventsQuickAddResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public CalendarEventsQuickAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}