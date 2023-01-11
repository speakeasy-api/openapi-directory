package openapisdk.models.operations;



public class DirectionsForDirectionRequest {
    public DirectionsForDirectionPathParams pathParams;
    public DirectionsForDirectionRequest withPathParams(DirectionsForDirectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DirectionsForDirectionQueryParams queryParams;
    public DirectionsForDirectionRequest withQueryParams(DirectionsForDirectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}