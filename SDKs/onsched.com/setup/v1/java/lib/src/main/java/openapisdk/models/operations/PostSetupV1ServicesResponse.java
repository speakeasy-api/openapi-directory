package openapisdk.models.operations;



public class PostSetupV1ServicesResponse {
    public String contentType;
    public PostSetupV1ServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public PostSetupV1ServicesResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}