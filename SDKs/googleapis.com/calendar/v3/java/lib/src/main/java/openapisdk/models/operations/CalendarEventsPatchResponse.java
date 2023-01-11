package openapisdk.models.operations;



public class CalendarEventsPatchResponse {
    public String contentType;
    public CalendarEventsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public CalendarEventsPatchResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public CalendarEventsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}