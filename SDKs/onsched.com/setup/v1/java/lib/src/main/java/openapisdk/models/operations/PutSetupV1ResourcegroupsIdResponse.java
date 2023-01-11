package openapisdk.models.operations;



public class PutSetupV1ResourcegroupsIdResponse {
    public String contentType;
    public PutSetupV1ResourcegroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel;
    public PutSetupV1ResourcegroupsIdResponse withResourceGroupViewModel(openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel) {
        this.resourceGroupViewModel = resourceGroupViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcegroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}