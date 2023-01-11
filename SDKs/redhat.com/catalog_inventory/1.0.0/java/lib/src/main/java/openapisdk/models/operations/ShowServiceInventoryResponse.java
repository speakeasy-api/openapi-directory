package openapisdk.models.operations;



public class ShowServiceInventoryResponse {
    public String contentType;
    public ShowServiceInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceInventoryResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceInventory serviceInventory;
    public ShowServiceInventoryResponse withServiceInventory(openapisdk.models.shared.ServiceInventory serviceInventory) {
        this.serviceInventory = serviceInventory;
        return this;
    }
    public Long statusCode;
    public ShowServiceInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}