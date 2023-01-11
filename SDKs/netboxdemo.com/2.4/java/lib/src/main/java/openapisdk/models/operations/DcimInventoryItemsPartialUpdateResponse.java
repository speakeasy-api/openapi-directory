package openapisdk.models.operations;



public class DcimInventoryItemsPartialUpdateResponse {
    public String contentType;
    public DcimInventoryItemsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItem inventoryItem;
    public DcimInventoryItemsPartialUpdateResponse withInventoryItem(openapisdk.models.shared.InventoryItem inventoryItem) {
        this.inventoryItem = inventoryItem;
        return this;
    }
    public Long statusCode;
    public DcimInventoryItemsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}