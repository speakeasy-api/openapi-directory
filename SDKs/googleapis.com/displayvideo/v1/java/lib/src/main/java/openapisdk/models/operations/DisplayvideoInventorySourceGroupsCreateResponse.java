package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsCreateResponse {
    public String contentType;
    public DisplayvideoInventorySourceGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySourceGroup inventorySourceGroup;
    public DisplayvideoInventorySourceGroupsCreateResponse withInventorySourceGroup(openapisdk.models.shared.InventorySourceGroup inventorySourceGroup) {
        this.inventorySourceGroup = inventorySourceGroup;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}