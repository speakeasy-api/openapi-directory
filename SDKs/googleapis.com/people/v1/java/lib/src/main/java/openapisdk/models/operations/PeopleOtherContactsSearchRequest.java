package openapisdk.models.operations;



public class PeopleOtherContactsSearchRequest {
    public PeopleOtherContactsSearchQueryParams queryParams;
    public PeopleOtherContactsSearchRequest withQueryParams(PeopleOtherContactsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeopleOtherContactsSearchSecurity security;
    public PeopleOtherContactsSearchRequest withSecurity(PeopleOtherContactsSearchSecurity security) {
        this.security = security;
        return this;
    }
}