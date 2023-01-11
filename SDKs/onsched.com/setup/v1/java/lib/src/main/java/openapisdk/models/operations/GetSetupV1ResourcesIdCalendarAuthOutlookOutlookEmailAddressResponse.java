package openapisdk.models.operations;



public class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse {
    public openapisdk.models.shared.CalendarAuthViewModel calendarAuthViewModel;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse withCalendarAuthViewModel(openapisdk.models.shared.CalendarAuthViewModel calendarAuthViewModel) {
        this.calendarAuthViewModel = calendarAuthViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}