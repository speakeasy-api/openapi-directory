package openapisdk.models.operations;



public class GetUserRequest {
    public GetUserPathParams pathParams;
    public GetUserRequest withPathParams(GetUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserHeaders headers;
    public GetUserRequest withHeaders(GetUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}