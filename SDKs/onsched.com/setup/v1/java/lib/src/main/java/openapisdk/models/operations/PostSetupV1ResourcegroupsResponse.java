package openapisdk.models.operations;



public class PostSetupV1ResourcegroupsResponse {
    public String contentType;
    public PostSetupV1ResourcegroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel;
    public PostSetupV1ResourcegroupsResponse withResourceGroupViewModel(openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel) {
        this.resourceGroupViewModel = resourceGroupViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcegroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}