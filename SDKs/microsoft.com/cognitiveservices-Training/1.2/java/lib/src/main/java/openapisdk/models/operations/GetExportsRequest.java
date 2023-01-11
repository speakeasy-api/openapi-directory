package openapisdk.models.operations;



public class GetExportsRequest {
    public GetExportsPathParams pathParams;
    public GetExportsRequest withPathParams(GetExportsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetExportsHeaders headers;
    public GetExportsRequest withHeaders(GetExportsHeaders headers) {
        this.headers = headers;
        return this;
    }
}