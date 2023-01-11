package openapisdk.models.operations;



public class GetProjectDocumentRequest {
    public GetProjectDocumentPathParams pathParams;
    public GetProjectDocumentRequest withPathParams(GetProjectDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectDocumentQueryParams queryParams;
    public GetProjectDocumentRequest withQueryParams(GetProjectDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}