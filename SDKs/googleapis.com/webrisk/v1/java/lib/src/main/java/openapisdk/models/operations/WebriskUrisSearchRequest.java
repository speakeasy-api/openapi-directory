package openapisdk.models.operations;



public class WebriskUrisSearchRequest {
    public WebriskUrisSearchQueryParams queryParams;
    public WebriskUrisSearchRequest withQueryParams(WebriskUrisSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebriskUrisSearchSecurity security;
    public WebriskUrisSearchRequest withSecurity(WebriskUrisSearchSecurity security) {
        this.security = security;
        return this;
    }
}