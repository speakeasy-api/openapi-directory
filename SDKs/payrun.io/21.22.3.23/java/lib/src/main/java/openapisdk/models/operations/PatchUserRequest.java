package openapisdk.models.operations;



public class PatchUserRequest {
    public PatchUserPathParams pathParams;
    public PatchUserRequest withPathParams(PatchUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchUserHeaders headers;
    public PatchUserRequest withHeaders(PatchUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}