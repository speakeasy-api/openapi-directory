package openapisdk.models.operations;



public class PutPermissionRequest {
    public PutPermissionPathParams pathParams;
    public PutPermissionRequest withPathParams(PutPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPermissionHeaders headers;
    public PutPermissionRequest withHeaders(PutPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
}