package openapisdk.models.operations;



public class PatchPermissionRequest {
    public PatchPermissionPathParams pathParams;
    public PatchPermissionRequest withPathParams(PatchPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchPermissionHeaders headers;
    public PatchPermissionRequest withHeaders(PatchPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
}