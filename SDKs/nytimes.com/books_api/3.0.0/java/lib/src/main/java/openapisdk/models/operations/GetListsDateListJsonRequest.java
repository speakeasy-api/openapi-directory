package openapisdk.models.operations;



public class GetListsDateListJsonRequest {
    public GetListsDateListJsonPathParams pathParams;
    public GetListsDateListJsonRequest withPathParams(GetListsDateListJsonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListsDateListJsonQueryParams queryParams;
    public GetListsDateListJsonRequest withQueryParams(GetListsDateListJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListsDateListJsonSecurity security;
    public GetListsDateListJsonRequest withSecurity(GetListsDateListJsonSecurity security) {
        this.security = security;
        return this;
    }
}