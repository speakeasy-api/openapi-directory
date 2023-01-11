package openapisdk.models.operations;



public class PutUserRequest {
    public PutUserPathParams pathParams;
    public PutUserRequest withPathParams(PutUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUserHeaders headers;
    public PutUserRequest withHeaders(PutUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}