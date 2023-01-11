package openapisdk.models.operations;



public class YoutubeLiveBroadcastsUpdateResponse {
    public String contentType;
    public YoutubeLiveBroadcastsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveBroadcast liveBroadcast;
    public YoutubeLiveBroadcastsUpdateResponse withLiveBroadcast(openapisdk.models.shared.LiveBroadcast liveBroadcast) {
        this.liveBroadcast = liveBroadcast;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}