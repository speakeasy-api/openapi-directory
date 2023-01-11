package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsGetResponse {
    public String contentType;
    public DisplayvideoInventorySourceGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySourceGroup inventorySourceGroup;
    public DisplayvideoInventorySourceGroupsGetResponse withInventorySourceGroup(openapisdk.models.shared.InventorySourceGroup inventorySourceGroup) {
        this.inventorySourceGroup = inventorySourceGroup;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}