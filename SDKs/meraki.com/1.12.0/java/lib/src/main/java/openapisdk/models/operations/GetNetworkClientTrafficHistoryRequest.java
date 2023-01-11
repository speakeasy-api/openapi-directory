package openapisdk.models.operations;



public class GetNetworkClientTrafficHistoryRequest {
    public GetNetworkClientTrafficHistoryPathParams pathParams;
    public GetNetworkClientTrafficHistoryRequest withPathParams(GetNetworkClientTrafficHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNetworkClientTrafficHistoryQueryParams queryParams;
    public GetNetworkClientTrafficHistoryRequest withQueryParams(GetNetworkClientTrafficHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}