package openapisdk.models.operations;



public class YoutubeLiveStreamsListRequest {
    public YoutubeLiveStreamsListQueryParams queryParams;
    public YoutubeLiveStreamsListRequest withQueryParams(YoutubeLiveStreamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveStreamsListSecurity security;
    public YoutubeLiveStreamsListRequest withSecurity(YoutubeLiveStreamsListSecurity security) {
        this.security = security;
        return this;
    }
}