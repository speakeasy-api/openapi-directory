package openapisdk.models.operations;



public class PutSetupV1CalendarsBlockIdResponse {
    public openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel;
    public PutSetupV1CalendarsBlockIdResponse withCalendarBlockViewModel(openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel) {
        this.calendarBlockViewModel = calendarBlockViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1CalendarsBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CalendarsBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}