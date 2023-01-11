package openapisdk.models.operations;



public class ListSourceServiceInventoriesResponse {
    public String contentType;
    public ListSourceServiceInventoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceServiceInventoriesResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceInventoriesCollection serviceInventoriesCollection;
    public ListSourceServiceInventoriesResponse withServiceInventoriesCollection(openapisdk.models.shared.ServiceInventoriesCollection serviceInventoriesCollection) {
        this.serviceInventoriesCollection = serviceInventoriesCollection;
        return this;
    }
    public Long statusCode;
    public ListSourceServiceInventoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}