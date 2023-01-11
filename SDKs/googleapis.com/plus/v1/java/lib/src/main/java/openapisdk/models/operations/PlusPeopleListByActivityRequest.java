package openapisdk.models.operations;



public class PlusPeopleListByActivityRequest {
    public PlusPeopleListByActivityPathParams pathParams;
    public PlusPeopleListByActivityRequest withPathParams(PlusPeopleListByActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusPeopleListByActivityQueryParams queryParams;
    public PlusPeopleListByActivityRequest withQueryParams(PlusPeopleListByActivityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusPeopleListByActivitySecurity security;
    public PlusPeopleListByActivityRequest withSecurity(PlusPeopleListByActivitySecurity security) {
        this.security = security;
        return this;
    }
}