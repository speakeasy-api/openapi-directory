package openapisdk.models.operations;



public class GetNetworkWirelessSignalQualityHistoryRequest {
    public GetNetworkWirelessSignalQualityHistoryPathParams pathParams;
    public GetNetworkWirelessSignalQualityHistoryRequest withPathParams(GetNetworkWirelessSignalQualityHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNetworkWirelessSignalQualityHistoryQueryParams queryParams;
    public GetNetworkWirelessSignalQualityHistoryRequest withQueryParams(GetNetworkWirelessSignalQualityHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}