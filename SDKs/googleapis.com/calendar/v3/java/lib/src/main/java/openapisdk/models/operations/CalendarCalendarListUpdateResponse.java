package openapisdk.models.operations;



public class CalendarCalendarListUpdateResponse {
    public openapisdk.models.shared.CalendarListEntry calendarListEntry;
    public CalendarCalendarListUpdateResponse withCalendarListEntry(openapisdk.models.shared.CalendarListEntry calendarListEntry) {
        this.calendarListEntry = calendarListEntry;
        return this;
    }
    public String contentType;
    public CalendarCalendarListUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}