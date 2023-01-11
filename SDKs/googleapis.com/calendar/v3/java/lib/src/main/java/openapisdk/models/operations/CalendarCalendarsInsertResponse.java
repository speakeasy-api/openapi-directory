package openapisdk.models.operations;



public class CalendarCalendarsInsertResponse {
    public openapisdk.models.shared.Calendar calendar;
    public CalendarCalendarsInsertResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public CalendarCalendarsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}