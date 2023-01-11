package openapisdk.models.operations;



public class DcimInventoryItemsListResponse {
    public String contentType;
    public DcimInventoryItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimInventoryItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimInventoryItemsList200ApplicationJson dcimInventoryItemsList200ApplicationJSONObject;
    public DcimInventoryItemsListResponse withDcimInventoryItemsList200ApplicationJsonObject(DcimInventoryItemsList200ApplicationJson dcimInventoryItemsList200ApplicationJSONObject) {
        this.dcimInventoryItemsList200ApplicationJSONObject = dcimInventoryItemsList200ApplicationJSONObject;
        return this;
    }
}