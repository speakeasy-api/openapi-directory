package openapisdk.models.operations;



public class PlusPeopleListRequest {
    public PlusPeopleListPathParams pathParams;
    public PlusPeopleListRequest withPathParams(PlusPeopleListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusPeopleListQueryParams queryParams;
    public PlusPeopleListRequest withQueryParams(PlusPeopleListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusPeopleListSecurity security;
    public PlusPeopleListRequest withSecurity(PlusPeopleListSecurity security) {
        this.security = security;
        return this;
    }
}