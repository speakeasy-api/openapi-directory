package openapisdk.models.operations;



public class DeleteSetupV1ServicesCalendarIdResponse {
    public String contentType;
    public DeleteSetupV1ServicesCalendarIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel;
    public DeleteSetupV1ServicesCalendarIdResponse withServiceCalendarViewModel(openapisdk.models.shared.ServiceCalendarViewModel serviceCalendarViewModel) {
        this.serviceCalendarViewModel = serviceCalendarViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ServicesCalendarIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}