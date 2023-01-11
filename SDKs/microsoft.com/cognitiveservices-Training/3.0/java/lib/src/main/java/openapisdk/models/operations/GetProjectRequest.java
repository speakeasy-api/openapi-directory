package openapisdk.models.operations;



public class GetProjectRequest {
    public GetProjectPathParams pathParams;
    public GetProjectRequest withPathParams(GetProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectHeaders headers;
    public GetProjectRequest withHeaders(GetProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}