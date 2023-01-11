package openapisdk.models.operations;



public class DeleteFromWatchHistoryRequest {
    public DeleteFromWatchHistoryPathParams pathParams;
    public DeleteFromWatchHistoryRequest withPathParams(DeleteFromWatchHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFromWatchHistorySecurity security;
    public DeleteFromWatchHistoryRequest withSecurity(DeleteFromWatchHistorySecurity security) {
        this.security = security;
        return this;
    }
}