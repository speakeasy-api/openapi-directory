package openapisdk.models.operations;



public class YoutubeLiveStreamsUpdateResponse {
    public String contentType;
    public YoutubeLiveStreamsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveStream liveStream;
    public YoutubeLiveStreamsUpdateResponse withLiveStream(openapisdk.models.shared.LiveStream liveStream) {
        this.liveStream = liveStream;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveStreamsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}