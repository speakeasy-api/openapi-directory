package openapisdk.models.operations;



public class GetSetupV1ServicesIdCalendarResponse {
    public String contentType;
    public GetSetupV1ServicesIdCalendarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel;
    public GetSetupV1ServicesIdCalendarResponse withServiceCalendarViewModel(openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel) {
        this.serviceCalendarViewModel = serviceCalendarViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesIdCalendarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}