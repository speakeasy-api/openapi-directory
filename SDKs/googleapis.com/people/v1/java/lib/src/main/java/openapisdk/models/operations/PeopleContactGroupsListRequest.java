package openapisdk.models.operations;



public class PeopleContactGroupsListRequest {
    public PeopleContactGroupsListQueryParams queryParams;
    public PeopleContactGroupsListRequest withQueryParams(PeopleContactGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeopleContactGroupsListSecurity security;
    public PeopleContactGroupsListRequest withSecurity(PeopleContactGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}