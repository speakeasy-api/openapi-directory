package openapisdk.models.operations;



public class PostSetupV1ResourcesBulkResponse {
    public String contentType;
    public PostSetupV1ResourcesBulkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceViewModel[] resourceViewModels;
    public PostSetupV1ResourcesBulkResponse withResourceViewModels(openapisdk.models.shared.ResourceViewModel[] resourceViewModels) {
        this.resourceViewModels = resourceViewModels;
        return this;
    }
    public Long statusCode;
    public PostSetupV1ResourcesBulkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}