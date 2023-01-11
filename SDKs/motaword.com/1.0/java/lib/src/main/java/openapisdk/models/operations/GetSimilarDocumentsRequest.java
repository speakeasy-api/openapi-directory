package openapisdk.models.operations;



public class GetSimilarDocumentsRequest {
    public GetSimilarDocumentsPathParams pathParams;
    public GetSimilarDocumentsRequest withPathParams(GetSimilarDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSimilarDocumentsQueryParams queryParams;
    public GetSimilarDocumentsRequest withQueryParams(GetSimilarDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}