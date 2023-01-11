package openapisdk.models.operations;



public class GetRtiJobProgressRequest {
    public GetRtiJobProgressPathParams pathParams;
    public GetRtiJobProgressRequest withPathParams(GetRtiJobProgressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRtiJobProgressHeaders headers;
    public GetRtiJobProgressRequest withHeaders(GetRtiJobProgressHeaders headers) {
        this.headers = headers;
        return this;
    }
}