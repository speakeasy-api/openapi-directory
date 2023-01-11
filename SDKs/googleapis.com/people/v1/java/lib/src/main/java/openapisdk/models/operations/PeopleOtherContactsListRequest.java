package openapisdk.models.operations;



public class PeopleOtherContactsListRequest {
    public PeopleOtherContactsListQueryParams queryParams;
    public PeopleOtherContactsListRequest withQueryParams(PeopleOtherContactsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeopleOtherContactsListSecurity security;
    public PeopleOtherContactsListRequest withSecurity(PeopleOtherContactsListSecurity security) {
        this.security = security;
        return this;
    }
}