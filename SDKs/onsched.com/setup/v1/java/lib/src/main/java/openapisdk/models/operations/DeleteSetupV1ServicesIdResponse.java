package openapisdk.models.operations;



public class DeleteSetupV1ServicesIdResponse {
    public String contentType;
    public DeleteSetupV1ServicesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public DeleteSetupV1ServicesIdResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ServicesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}