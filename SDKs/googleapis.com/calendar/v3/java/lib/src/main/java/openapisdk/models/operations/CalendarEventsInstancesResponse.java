package openapisdk.models.operations;



public class CalendarEventsInstancesResponse {
    public String contentType;
    public CalendarEventsInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Events events;
    public CalendarEventsInstancesResponse withEvents(openapisdk.models.shared.Events events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public CalendarEventsInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}