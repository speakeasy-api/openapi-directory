package openapisdk.models.operations;



public class GetSetupV1ResourcegroupsResponse {
    public String contentType;
    public GetSetupV1ResourcegroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceGroupListViewModel;
    public GetSetupV1ResourcegroupsResponse withResourceGroupListViewModel(java.util.Map<String, Object> resourceGroupListViewModel) {
        this.resourceGroupListViewModel = resourceGroupListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcegroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}