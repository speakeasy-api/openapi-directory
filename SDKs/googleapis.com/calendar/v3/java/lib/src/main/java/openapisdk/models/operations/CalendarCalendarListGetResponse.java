package openapisdk.models.operations;



public class CalendarCalendarListGetResponse {
    public openapisdk.models.shared.CalendarListEntry calendarListEntry;
    public CalendarCalendarListGetResponse withCalendarListEntry(openapisdk.models.shared.CalendarListEntry calendarListEntry) {
        this.calendarListEntry = calendarListEntry;
        return this;
    }
    public String contentType;
    public CalendarCalendarListGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}