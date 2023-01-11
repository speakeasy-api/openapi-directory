package openapisdk.models.operations;



public class DeleteSetupV1ServicesIdDeleteimageResponse {
    public String contentType;
    public DeleteSetupV1ServicesIdDeleteimageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public DeleteSetupV1ServicesIdDeleteimageResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ServicesIdDeleteimageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}