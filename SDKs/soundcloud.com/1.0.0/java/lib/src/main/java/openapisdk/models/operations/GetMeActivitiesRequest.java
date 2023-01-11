package openapisdk.models.operations;



public class GetMeActivitiesRequest {
    public GetMeActivitiesQueryParams queryParams;
    public GetMeActivitiesRequest withQueryParams(GetMeActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeActivitiesSecurity security;
    public GetMeActivitiesRequest withSecurity(GetMeActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}