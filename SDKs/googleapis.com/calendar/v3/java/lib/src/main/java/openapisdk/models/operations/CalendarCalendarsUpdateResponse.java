package openapisdk.models.operations;



public class CalendarCalendarsUpdateResponse {
    public openapisdk.models.shared.Calendar calendar;
    public CalendarCalendarsUpdateResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public CalendarCalendarsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}