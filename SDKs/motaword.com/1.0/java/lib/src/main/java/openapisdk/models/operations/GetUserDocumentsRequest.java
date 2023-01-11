package openapisdk.models.operations;



public class GetUserDocumentsRequest {
    public GetUserDocumentsPathParams pathParams;
    public GetUserDocumentsRequest withPathParams(GetUserDocumentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserDocumentsQueryParams queryParams;
    public GetUserDocumentsRequest withQueryParams(GetUserDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}