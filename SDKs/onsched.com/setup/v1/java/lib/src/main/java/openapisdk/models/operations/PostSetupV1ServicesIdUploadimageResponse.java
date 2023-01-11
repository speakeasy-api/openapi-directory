package openapisdk.models.operations;



public class PostSetupV1ServicesIdUploadimageResponse {
    public String contentType;
    public PostSetupV1ServicesIdUploadimageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceViewModel serviceViewModel;
    public PostSetupV1ServicesIdUploadimageResponse withServiceViewModel(openapisdk.models.shared.ServiceViewModel serviceViewModel) {
        this.serviceViewModel = serviceViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ServicesIdUploadimageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}