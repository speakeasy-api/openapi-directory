package openapisdk.models.operations;



public class DisplayvideoUsersBulkEditAssignedUserRolesResponse {
    public openapisdk.models.shared.BulkEditAssignedUserRolesResponse bulkEditAssignedUserRolesResponse;
    public DisplayvideoUsersBulkEditAssignedUserRolesResponse withBulkEditAssignedUserRolesResponse(openapisdk.models.shared.BulkEditAssignedUserRolesResponse bulkEditAssignedUserRolesResponse) {
        this.bulkEditAssignedUserRolesResponse = bulkEditAssignedUserRolesResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoUsersBulkEditAssignedUserRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoUsersBulkEditAssignedUserRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}