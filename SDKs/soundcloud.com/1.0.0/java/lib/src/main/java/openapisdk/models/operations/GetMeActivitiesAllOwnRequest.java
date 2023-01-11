package openapisdk.models.operations;



public class GetMeActivitiesAllOwnRequest {
    public GetMeActivitiesAllOwnQueryParams queryParams;
    public GetMeActivitiesAllOwnRequest withQueryParams(GetMeActivitiesAllOwnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMeActivitiesAllOwnSecurity security;
    public GetMeActivitiesAllOwnRequest withSecurity(GetMeActivitiesAllOwnSecurity security) {
        this.security = security;
        return this;
    }
}