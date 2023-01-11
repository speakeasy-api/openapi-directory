package openapisdk.models.operations;



public class GetRequest {
    public GetPathParams pathParams;
    public GetRequest withPathParams(GetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetHeaders headers;
    public GetRequest withHeaders(GetHeaders headers) {
        this.headers = headers;
        return this;
    }
}