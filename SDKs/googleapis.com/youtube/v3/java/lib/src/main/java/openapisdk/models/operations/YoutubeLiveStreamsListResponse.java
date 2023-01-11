package openapisdk.models.operations;



public class YoutubeLiveStreamsListResponse {
    public String contentType;
    public YoutubeLiveStreamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveStreamListResponse liveStreamListResponse;
    public YoutubeLiveStreamsListResponse withLiveStreamListResponse(openapisdk.models.shared.LiveStreamListResponse liveStreamListResponse) {
        this.liveStreamListResponse = liveStreamListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveStreamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}