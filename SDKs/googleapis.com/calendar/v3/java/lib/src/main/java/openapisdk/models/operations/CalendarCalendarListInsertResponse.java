package openapisdk.models.operations;



public class CalendarCalendarListInsertResponse {
    public openapisdk.models.shared.CalendarListEntry calendarListEntry;
    public CalendarCalendarListInsertResponse withCalendarListEntry(openapisdk.models.shared.CalendarListEntry calendarListEntry) {
        this.calendarListEntry = calendarListEntry;
        return this;
    }
    public String contentType;
    public CalendarCalendarListInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}