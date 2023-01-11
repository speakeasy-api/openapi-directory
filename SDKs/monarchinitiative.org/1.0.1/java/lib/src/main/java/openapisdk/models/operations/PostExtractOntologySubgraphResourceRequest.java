package openapisdk.models.operations;



public class PostExtractOntologySubgraphResourceRequest {
    public PostExtractOntologySubgraphResourcePathParams pathParams;
    public PostExtractOntologySubgraphResourceRequest withPathParams(PostExtractOntologySubgraphResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostExtractOntologySubgraphResourceQueryParams queryParams;
    public PostExtractOntologySubgraphResourceRequest withQueryParams(PostExtractOntologySubgraphResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}