package openapisdk.models.operations;



public class PostSetupV1LocationsBulkResponse {
    public String contentType;
    public PostSetupV1LocationsBulkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel[] locationViewModels;
    public PostSetupV1LocationsBulkResponse withLocationViewModels(openapisdk.models.shared.LocationViewModel[] locationViewModels) {
        this.locationViewModels = locationViewModels;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsBulkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}