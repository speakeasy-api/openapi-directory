package openapisdk.models.operations;



public class PeoplePeopleSearchContactsRequest {
    public PeoplePeopleSearchContactsQueryParams queryParams;
    public PeoplePeopleSearchContactsRequest withQueryParams(PeoplePeopleSearchContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeoplePeopleSearchContactsSecurity security;
    public PeoplePeopleSearchContactsRequest withSecurity(PeoplePeopleSearchContactsSecurity security) {
        this.security = security;
        return this;
    }
}