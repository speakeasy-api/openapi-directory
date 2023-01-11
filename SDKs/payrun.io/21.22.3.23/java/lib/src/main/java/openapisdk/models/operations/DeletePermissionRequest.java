package openapisdk.models.operations;



public class DeletePermissionRequest {
    public DeletePermissionPathParams pathParams;
    public DeletePermissionRequest withPathParams(DeletePermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePermissionHeaders headers;
    public DeletePermissionRequest withHeaders(DeletePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
}