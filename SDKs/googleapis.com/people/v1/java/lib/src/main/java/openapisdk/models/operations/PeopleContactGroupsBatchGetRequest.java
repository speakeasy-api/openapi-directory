package openapisdk.models.operations;



public class PeopleContactGroupsBatchGetRequest {
    public PeopleContactGroupsBatchGetQueryParams queryParams;
    public PeopleContactGroupsBatchGetRequest withQueryParams(PeopleContactGroupsBatchGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeopleContactGroupsBatchGetSecurity security;
    public PeopleContactGroupsBatchGetRequest withSecurity(PeopleContactGroupsBatchGetSecurity security) {
        this.security = security;
        return this;
    }
}