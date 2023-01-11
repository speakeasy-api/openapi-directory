package openapisdk.models.operations;



public class PeoplePeopleConnectionsListRequest {
    public PeoplePeopleConnectionsListPathParams pathParams;
    public PeoplePeopleConnectionsListRequest withPathParams(PeoplePeopleConnectionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeoplePeopleConnectionsListQueryParams queryParams;
    public PeoplePeopleConnectionsListRequest withQueryParams(PeoplePeopleConnectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeoplePeopleConnectionsListSecurity security;
    public PeoplePeopleConnectionsListRequest withSecurity(PeoplePeopleConnectionsListSecurity security) {
        this.security = security;
        return this;
    }
}