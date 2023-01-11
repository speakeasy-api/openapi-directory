package openapisdk.models.operations;



public class DeleteSetupV1ResourcegroupsIdResponse {
    public String contentType;
    public DeleteSetupV1ResourcegroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel;
    public DeleteSetupV1ResourcegroupsIdResponse withResourceGroupViewModel(openapisdk.models.shared.ResourceGroupViewModel resourceGroupViewModel) {
        this.resourceGroupViewModel = resourceGroupViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1ResourcegroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}