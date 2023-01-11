package openapisdk.models.operations;



public class GetDpsJobProgressRequest {
    public GetDpsJobProgressPathParams pathParams;
    public GetDpsJobProgressRequest withPathParams(GetDpsJobProgressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDpsJobProgressHeaders headers;
    public GetDpsJobProgressRequest withHeaders(GetDpsJobProgressHeaders headers) {
        this.headers = headers;
        return this;
    }
}