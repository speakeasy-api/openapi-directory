package openapisdk.models.operations;



public class CalendarCalendarsGetResponse {
    public openapisdk.models.shared.Calendar calendar;
    public CalendarCalendarsGetResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public CalendarCalendarsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}