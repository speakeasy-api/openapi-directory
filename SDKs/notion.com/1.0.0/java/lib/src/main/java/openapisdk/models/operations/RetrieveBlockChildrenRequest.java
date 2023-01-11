package openapisdk.models.operations;



public class RetrieveBlockChildrenRequest {
    public RetrieveBlockChildrenPathParams pathParams;
    public RetrieveBlockChildrenRequest withPathParams(RetrieveBlockChildrenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveBlockChildrenQueryParams queryParams;
    public RetrieveBlockChildrenRequest withQueryParams(RetrieveBlockChildrenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}