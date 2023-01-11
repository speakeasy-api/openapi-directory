package openapisdk.models.operations;



public class DfareportingInventoryItemsListResponse {
    public String contentType;
    public DfareportingInventoryItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItemsListResponse inventoryItemsListResponse;
    public DfareportingInventoryItemsListResponse withInventoryItemsListResponse(openapisdk.models.shared.InventoryItemsListResponse inventoryItemsListResponse) {
        this.inventoryItemsListResponse = inventoryItemsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingInventoryItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}