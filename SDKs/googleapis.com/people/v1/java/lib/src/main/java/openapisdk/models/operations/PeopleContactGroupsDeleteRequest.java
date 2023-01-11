package openapisdk.models.operations;



public class PeopleContactGroupsDeleteRequest {
    public PeopleContactGroupsDeletePathParams pathParams;
    public PeopleContactGroupsDeleteRequest withPathParams(PeopleContactGroupsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeopleContactGroupsDeleteQueryParams queryParams;
    public PeopleContactGroupsDeleteRequest withQueryParams(PeopleContactGroupsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeopleContactGroupsDeleteSecurity security;
    public PeopleContactGroupsDeleteRequest withSecurity(PeopleContactGroupsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}