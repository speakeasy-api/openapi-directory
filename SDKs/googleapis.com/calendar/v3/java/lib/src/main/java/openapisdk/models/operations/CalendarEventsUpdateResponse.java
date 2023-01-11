package openapisdk.models.operations;



public class CalendarEventsUpdateResponse {
    public String contentType;
    public CalendarEventsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public CalendarEventsUpdateResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public CalendarEventsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}