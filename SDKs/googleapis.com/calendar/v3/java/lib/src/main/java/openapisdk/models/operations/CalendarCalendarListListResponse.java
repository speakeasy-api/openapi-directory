package openapisdk.models.operations;



public class CalendarCalendarListListResponse {
    public openapisdk.models.shared.CalendarList calendarList;
    public CalendarCalendarListListResponse withCalendarList(openapisdk.models.shared.CalendarList calendarList) {
        this.calendarList = calendarList;
        return this;
    }
    public String contentType;
    public CalendarCalendarListListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}