package openapisdk.models.operations;



public class CalendarCalendarListPatchResponse {
    public openapisdk.models.shared.CalendarListEntry calendarListEntry;
    public CalendarCalendarListPatchResponse withCalendarListEntry(openapisdk.models.shared.CalendarListEntry calendarListEntry) {
        this.calendarListEntry = calendarListEntry;
        return this;
    }
    public String contentType;
    public CalendarCalendarListPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarCalendarListPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}