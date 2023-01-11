package openapisdk.models.operations;



public class DeleteSetupV1CalendarsBlockIdResponse {
    public openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel;
    public DeleteSetupV1CalendarsBlockIdResponse withCalendarBlockViewModel(openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel) {
        this.calendarBlockViewModel = calendarBlockViewModel;
        return this;
    }
    public String contentType;
    public DeleteSetupV1CalendarsBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1CalendarsBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}