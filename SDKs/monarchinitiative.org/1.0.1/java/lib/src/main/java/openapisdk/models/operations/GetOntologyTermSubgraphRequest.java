package openapisdk.models.operations;



public class GetOntologyTermSubgraphRequest {
    public GetOntologyTermSubgraphPathParams pathParams;
    public GetOntologyTermSubgraphRequest withPathParams(GetOntologyTermSubgraphPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOntologyTermSubgraphQueryParams queryParams;
    public GetOntologyTermSubgraphRequest withQueryParams(GetOntologyTermSubgraphQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}