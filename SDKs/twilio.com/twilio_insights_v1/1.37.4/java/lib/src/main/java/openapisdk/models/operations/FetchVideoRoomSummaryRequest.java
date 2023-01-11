package openapisdk.models.operations;



public class FetchVideoRoomSummaryRequest {
    public String serverURL;
    public FetchVideoRoomSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVideoRoomSummaryPathParams pathParams;
    public FetchVideoRoomSummaryRequest withPathParams(FetchVideoRoomSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVideoRoomSummarySecurity security;
    public FetchVideoRoomSummaryRequest withSecurity(FetchVideoRoomSummarySecurity security) {
        this.security = security;
        return this;
    }
}