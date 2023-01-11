package openapisdk.models.operations;



public class GetSetupV1ServicesIdBlocksResponse {
    public String contentType;
    public GetSetupV1ServicesIdBlocksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> serviceBlockListViewModel;
    public GetSetupV1ServicesIdBlocksResponse withServiceBlockListViewModel(java.util.Map<String, Object> serviceBlockListViewModel) {
        this.serviceBlockListViewModel = serviceBlockListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ServicesIdBlocksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}