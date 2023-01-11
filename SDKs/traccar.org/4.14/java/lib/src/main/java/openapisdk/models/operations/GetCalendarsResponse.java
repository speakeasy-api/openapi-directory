package openapisdk.models.operations;



public class GetCalendarsResponse {
    public openapisdk.models.shared.Calendar[] calendars;
    public GetCalendarsResponse withCalendars(openapisdk.models.shared.Calendar[] calendars) {
        this.calendars = calendars;
        return this;
    }
    public String contentType;
    public GetCalendarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCalendarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}