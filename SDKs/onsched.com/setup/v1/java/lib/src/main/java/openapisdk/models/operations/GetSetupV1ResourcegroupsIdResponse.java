package openapisdk.models.operations;



public class GetSetupV1ResourcegroupsIdResponse {
    public String contentType;
    public GetSetupV1ResourcegroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel;
    public GetSetupV1ResourcegroupsIdResponse withResourceGroupViewModel(openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel) {
        this.resourceGroupViewModel = resourceGroupViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1ResourcegroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}