package openapisdk.models.operations;



public class DownloadUsageHistoryRequest {
    public DownloadUsageHistoryPathParams pathParams;
    public DownloadUsageHistoryRequest withPathParams(DownloadUsageHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadUsageHistoryQueryParams queryParams;
    public DownloadUsageHistoryRequest withQueryParams(DownloadUsageHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DownloadUsageHistorySecurity security;
    public DownloadUsageHistoryRequest withSecurity(DownloadUsageHistorySecurity security) {
        this.security = security;
        return this;
    }
}