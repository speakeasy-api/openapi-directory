package openapisdk.models.operations;



public class PostSetupV1ServicesCalendarResponse {
    public String contentType;
    public PostSetupV1ServicesCalendarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel;
    public PostSetupV1ServicesCalendarResponse withServiceCalendarViewModel(openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel) {
        this.serviceCalendarViewModel = serviceCalendarViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesCalendarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}