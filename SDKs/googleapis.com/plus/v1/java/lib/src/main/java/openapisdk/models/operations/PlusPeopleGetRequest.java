package openapisdk.models.operations;



public class PlusPeopleGetRequest {
    public PlusPeopleGetPathParams pathParams;
    public PlusPeopleGetRequest withPathParams(PlusPeopleGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusPeopleGetQueryParams queryParams;
    public PlusPeopleGetRequest withQueryParams(PlusPeopleGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusPeopleGetSecurity security;
    public PlusPeopleGetRequest withSecurity(PlusPeopleGetSecurity security) {
        this.security = security;
        return this;
    }
}