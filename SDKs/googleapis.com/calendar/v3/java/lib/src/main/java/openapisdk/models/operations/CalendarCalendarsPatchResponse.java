package openapisdk.models.operations;



public class CalendarCalendarsPatchResponse {
    public openapisdk.models.shared.Calendar calendar;
    public CalendarCalendarsPatchResponse withCalendar(openapisdk.models.shared.Calendar calendar) {
        this.calendar = calendar;
        return this;
    }
    public String contentType;
    public CalendarCalendarsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}