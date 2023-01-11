package openapisdk.models.operations;



public class YoutubeLiveBroadcastsTransitionResponse {
    public String contentType;
    public YoutubeLiveBroadcastsTransitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveBroadcast liveBroadcast;
    public YoutubeLiveBroadcastsTransitionResponse withLiveBroadcast(openapisdk.models.shared.LiveBroadcast liveBroadcast) {
        this.liveBroadcast = liveBroadcast;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsTransitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}