package openapisdk.models.operations;



public class GetWatchHistoryRequest {
    public GetWatchHistoryQueryParams queryParams;
    public GetWatchHistoryRequest withQueryParams(GetWatchHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWatchHistorySecurity security;
    public GetWatchHistoryRequest withSecurity(GetWatchHistorySecurity security) {
        this.security = security;
        return this;
    }
}