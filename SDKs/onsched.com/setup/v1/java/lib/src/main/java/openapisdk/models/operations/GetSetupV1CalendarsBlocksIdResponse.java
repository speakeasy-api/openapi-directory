package openapisdk.models.operations;



public class GetSetupV1CalendarsBlocksIdResponse {
    public openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel;
    public GetSetupV1CalendarsBlocksIdResponse withCalendarBlockViewModel(openapisdk.models.shared.CalendarBlockViewModel calendarBlockViewModel) {
        this.calendarBlockViewModel = calendarBlockViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1CalendarsBlocksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CalendarsBlocksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}