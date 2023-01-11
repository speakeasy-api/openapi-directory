package openapisdk.models.operations;



public class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse {
    public openapisdk.models.shared.CalendarAuthViewModel calendarAuthViewModel;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse withCalendarAuthViewModel(openapisdk.models.shared.CalendarAuthViewModel calendarAuthViewModel) {
        this.calendarAuthViewModel = calendarAuthViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}