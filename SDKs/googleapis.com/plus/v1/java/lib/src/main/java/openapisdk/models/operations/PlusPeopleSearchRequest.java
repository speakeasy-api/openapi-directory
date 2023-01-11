package openapisdk.models.operations;



public class PlusPeopleSearchRequest {
    public PlusPeopleSearchQueryParams queryParams;
    public PlusPeopleSearchRequest withQueryParams(PlusPeopleSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusPeopleSearchSecurity security;
    public PlusPeopleSearchRequest withSecurity(PlusPeopleSearchSecurity security) {
        this.security = security;
        return this;
    }
}