package openapisdk.models.operations;



public class DfareportingInventoryItemsGetResponse {
    public String contentType;
    public DfareportingInventoryItemsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItem inventoryItem;
    public DfareportingInventoryItemsGetResponse withInventoryItem(openapisdk.models.shared.InventoryItem inventoryItem) {
        this.inventoryItem = inventoryItem;
        return this;
    }
    public Long statusCode;
    public DfareportingInventoryItemsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}