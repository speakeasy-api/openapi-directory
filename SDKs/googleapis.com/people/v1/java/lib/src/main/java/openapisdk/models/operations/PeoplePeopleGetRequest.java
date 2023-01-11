package openapisdk.models.operations;



public class PeoplePeopleGetRequest {
    public PeoplePeopleGetPathParams pathParams;
    public PeoplePeopleGetRequest withPathParams(PeoplePeopleGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeoplePeopleGetQueryParams queryParams;
    public PeoplePeopleGetRequest withQueryParams(PeoplePeopleGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeoplePeopleGetSecurity security;
    public PeoplePeopleGetRequest withSecurity(PeoplePeopleGetSecurity security) {
        this.security = security;
        return this;
    }
}