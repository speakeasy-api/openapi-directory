package openapisdk.models.operations;



public class PlusActivitiesGetRequest {
    public PlusActivitiesGetPathParams pathParams;
    public PlusActivitiesGetRequest withPathParams(PlusActivitiesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlusActivitiesGetQueryParams queryParams;
    public PlusActivitiesGetRequest withQueryParams(PlusActivitiesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlusActivitiesGetSecurity security;
    public PlusActivitiesGetRequest withSecurity(PlusActivitiesGetSecurity security) {
        this.security = security;
        return this;
    }
}