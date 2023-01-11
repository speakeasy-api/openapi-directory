package openapisdk.models.operations;



public class GetDeviceLossAndLatencyHistoryRequest {
    public GetDeviceLossAndLatencyHistoryPathParams pathParams;
    public GetDeviceLossAndLatencyHistoryRequest withPathParams(GetDeviceLossAndLatencyHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeviceLossAndLatencyHistoryQueryParams queryParams;
    public GetDeviceLossAndLatencyHistoryRequest withQueryParams(GetDeviceLossAndLatencyHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}