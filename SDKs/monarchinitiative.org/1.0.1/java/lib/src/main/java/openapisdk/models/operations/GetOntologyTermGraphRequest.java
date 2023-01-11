package openapisdk.models.operations;



public class GetOntologyTermGraphRequest {
    public GetOntologyTermGraphPathParams pathParams;
    public GetOntologyTermGraphRequest withPathParams(GetOntologyTermGraphPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOntologyTermGraphQueryParams queryParams;
    public GetOntologyTermGraphRequest withQueryParams(GetOntologyTermGraphQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}