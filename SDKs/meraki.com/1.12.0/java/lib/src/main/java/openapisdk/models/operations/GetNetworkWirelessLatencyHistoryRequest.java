package openapisdk.models.operations;



public class GetNetworkWirelessLatencyHistoryRequest {
    public GetNetworkWirelessLatencyHistoryPathParams pathParams;
    public GetNetworkWirelessLatencyHistoryRequest withPathParams(GetNetworkWirelessLatencyHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNetworkWirelessLatencyHistoryQueryParams queryParams;
    public GetNetworkWirelessLatencyHistoryRequest withQueryParams(GetNetworkWirelessLatencyHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}