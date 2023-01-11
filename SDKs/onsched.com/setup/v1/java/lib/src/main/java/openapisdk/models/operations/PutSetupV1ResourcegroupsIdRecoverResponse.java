package openapisdk.models.operations;



public class PutSetupV1ResourcegroupsIdRecoverResponse {
    public String contentType;
    public PutSetupV1ResourcegroupsIdRecoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel resourceViewModel;
    public PutSetupV1ResourcegroupsIdRecoverResponse withResourceViewModel(openapisdk.models.shared.ResourceViewModel resourceViewModel) {
        this.resourceViewModel = resourceViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcegroupsIdRecoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}