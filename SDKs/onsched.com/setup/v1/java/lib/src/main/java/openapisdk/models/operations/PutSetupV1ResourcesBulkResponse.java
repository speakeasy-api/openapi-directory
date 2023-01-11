package openapisdk.models.operations;



public class PutSetupV1ResourcesBulkResponse {
    public String contentType;
    public PutSetupV1ResourcesBulkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel[] resourceViewModels;
    public PutSetupV1ResourcesBulkResponse withResourceViewModels(openapisdk.models.shared.ResourceViewModel[] resourceViewModels) {
        this.resourceViewModels = resourceViewModels;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesBulkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}