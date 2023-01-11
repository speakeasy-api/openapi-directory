package openapisdk.models.operations;



public class PostSetupV1ServicesIdBlockResponse {
    public String contentType;
    public PostSetupV1ServicesIdBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceBlockViewModel serviceBlockViewModel;
    public PostSetupV1ServicesIdBlockResponse withServiceBlockViewModel(openapisdk.models.shared.ServiceBlockViewModel serviceBlockViewModel) {
        this.serviceBlockViewModel = serviceBlockViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesIdBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}