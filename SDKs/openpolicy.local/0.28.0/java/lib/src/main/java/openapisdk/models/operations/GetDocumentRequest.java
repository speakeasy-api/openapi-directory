package openapisdk.models.operations;



public class GetDocumentRequest {
    public GetDocumentPathParams pathParams;
    public GetDocumentRequest withPathParams(GetDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDocumentQueryParams queryParams;
    public GetDocumentRequest withQueryParams(GetDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}