package openapisdk.models.operations;



public class CalendarEventsMoveResponse {
    public String contentType;
    public CalendarEventsMoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public CalendarEventsMoveResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public CalendarEventsMoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}