package openapisdk.models.operations;



public class ListVideoRoomSummaryRequest {
    public String serverURL;
    public ListVideoRoomSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVideoRoomSummaryQueryParams queryParams;
    public ListVideoRoomSummaryRequest withQueryParams(ListVideoRoomSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVideoRoomSummarySecurity security;
    public ListVideoRoomSummaryRequest withSecurity(ListVideoRoomSummarySecurity security) {
        this.security = security;
        return this;
    }
}