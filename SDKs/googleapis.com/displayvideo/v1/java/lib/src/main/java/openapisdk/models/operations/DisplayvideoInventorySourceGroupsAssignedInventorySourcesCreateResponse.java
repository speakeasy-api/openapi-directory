package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse {
    public openapisdk.models.shared.AssignedInventorySource assignedInventorySource;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse withAssignedInventorySource(openapisdk.models.shared.AssignedInventorySource assignedInventorySource) {
        this.assignedInventorySource = assignedInventorySource;
        return this;
    }
    public String contentType;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}