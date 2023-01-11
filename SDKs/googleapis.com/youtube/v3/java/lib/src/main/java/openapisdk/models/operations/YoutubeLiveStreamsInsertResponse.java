package openapisdk.models.operations;



public class YoutubeLiveStreamsInsertResponse {
    public String contentType;
    public YoutubeLiveStreamsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveStream liveStream;
    public YoutubeLiveStreamsInsertResponse withLiveStream(openapisdk.models.shared.LiveStream liveStream) {
        this.liveStream = liveStream;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveStreamsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}