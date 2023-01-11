package openapisdk.models.operations;



public class PlusActivitiesSearchRequest {
    public PlusActivitiesSearchQueryParams queryParams;
    public PlusActivitiesSearchRequest withQueryParams(PlusActivitiesSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusActivitiesSearchSecurity security;
    public PlusActivitiesSearchRequest withSecurity(PlusActivitiesSearchSecurity security) {
        this.security = security;
        return this;
    }
}