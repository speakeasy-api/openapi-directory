package openapisdk.models.operations;



public class GetProjectDocumentsRequest {
    public GetProjectDocumentsPathParams pathParams;
    public GetProjectDocumentsRequest withPathParams(GetProjectDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectDocumentsQueryParams queryParams;
    public GetProjectDocumentsRequest withQueryParams(GetProjectDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}