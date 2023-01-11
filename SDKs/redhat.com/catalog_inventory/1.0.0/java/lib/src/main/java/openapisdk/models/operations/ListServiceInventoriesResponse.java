package openapisdk.models.operations;



public class ListServiceInventoriesResponse {
    public String contentType;
    public ListServiceInventoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceInventoriesCollection serviceInventoriesCollection;
    public ListServiceInventoriesResponse withServiceInventoriesCollection(openapisdk.models.shared.ServiceInventoriesCollection serviceInventoriesCollection) {
        this.serviceInventoriesCollection = serviceInventoriesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceInventoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}