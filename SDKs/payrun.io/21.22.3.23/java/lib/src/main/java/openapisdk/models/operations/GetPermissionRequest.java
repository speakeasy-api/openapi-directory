package openapisdk.models.operations;



public class GetPermissionRequest {
    public GetPermissionPathParams pathParams;
    public GetPermissionRequest withPathParams(GetPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPermissionHeaders headers;
    public GetPermissionRequest withHeaders(GetPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
}