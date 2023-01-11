package openapisdk.models.operations;



public class PostCalendarsResponse {
    public openapisdk.models.shared.Calendar calendar;
    public PostCalendarsResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public PostCalendarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCalendarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}