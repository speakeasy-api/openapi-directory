package openapisdk.models.operations;



public class GetNetworkTrafficRequest {
    public GetNetworkTrafficPathParams pathParams;
    public GetNetworkTrafficRequest withPathParams(GetNetworkTrafficPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNetworkTrafficQueryParams queryParams;
    public GetNetworkTrafficRequest withQueryParams(GetNetworkTrafficQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}