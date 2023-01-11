package openapisdk.models.operations;



public class PeoplePeopleGetBatchGetRequest {
    public PeoplePeopleGetBatchGetQueryParams queryParams;
    public PeoplePeopleGetBatchGetRequest withQueryParams(PeoplePeopleGetBatchGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PeoplePeopleGetBatchGetSecurity security;
    public PeoplePeopleGetBatchGetRequest withSecurity(PeoplePeopleGetBatchGetSecurity security) {
        this.security = security;
        return this;
    }
}