package openapisdk.models.operations;



public class WebriskHashesSearchRequest {
    public WebriskHashesSearchQueryParams queryParams;
    public WebriskHashesSearchRequest withQueryParams(WebriskHashesSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebriskHashesSearchSecurity security;
    public WebriskHashesSearchRequest withSecurity(WebriskHashesSearchSecurity security) {
        this.security = security;
        return this;
    }
}