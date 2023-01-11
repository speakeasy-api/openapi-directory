package openapisdk.models.operations;



public class DirectionsForRouteRequest {
    public DirectionsForRoutePathParams pathParams;
    public DirectionsForRouteRequest withPathParams(DirectionsForRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DirectionsForRouteQueryParams queryParams;
    public DirectionsForRouteRequest withQueryParams(DirectionsForRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}