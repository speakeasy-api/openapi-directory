package openapisdk.models.operations;



public class YoutubeLiveStreamsDeleteRequest {
    public YoutubeLiveStreamsDeleteQueryParams queryParams;
    public YoutubeLiveStreamsDeleteRequest withQueryParams(YoutubeLiveStreamsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeLiveStreamsDeleteSecurity security;
    public YoutubeLiveStreamsDeleteRequest withSecurity(YoutubeLiveStreamsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}