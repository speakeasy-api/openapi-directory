package openapisdk.models.operations;



public class UploadInventoryResponse {
    public String contentType;
    public UploadInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UploadInventory200ApplicationJson uploadInventory200ApplicationJSONObject;
    public UploadInventoryResponse withUploadInventory200ApplicationJsonObject(UploadInventory200ApplicationJson uploadInventory200ApplicationJSONObject) {
        this.uploadInventory200ApplicationJSONObject = uploadInventory200ApplicationJSONObject;
        return this;
    }
}