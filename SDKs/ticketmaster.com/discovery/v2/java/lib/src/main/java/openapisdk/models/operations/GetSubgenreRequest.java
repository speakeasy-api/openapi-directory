package openapisdk.models.operations;



public class GetSubgenreRequest {
    public GetSubgenrePathParams pathParams;
    public GetSubgenreRequest withPathParams(GetSubgenrePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubgenreQueryParams queryParams;
    public GetSubgenreRequest withQueryParams(GetSubgenreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}