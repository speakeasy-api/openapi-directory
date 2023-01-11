package openapisdk.models.operations;



public class GameservicesProjectsLocationsListRequest {
    public GameservicesProjectsLocationsListPathParams pathParams;
    public GameservicesProjectsLocationsListRequest withPathParams(GameservicesProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GameservicesProjectsLocationsListQueryParams queryParams;
    public GameservicesProjectsLocationsListRequest withQueryParams(GameservicesProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GameservicesProjectsLocationsListSecurity security;
    public GameservicesProjectsLocationsListRequest withSecurity(GameservicesProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}