package openapisdk.models.operations;



public class GetSetupV1ServicesResponse {
    public String contentType;
    public GetSetupV1ServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceListViewModel;
    public GetSetupV1ServicesResponse withServiceListViewModel(java.util.Map<String, Object> serviceListViewModel) {
        this.serviceListViewModel = serviceListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}