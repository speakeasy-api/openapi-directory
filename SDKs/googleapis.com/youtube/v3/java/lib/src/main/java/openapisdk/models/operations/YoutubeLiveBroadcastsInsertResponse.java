package openapisdk.models.operations;



public class YoutubeLiveBroadcastsInsertResponse {
    public String contentType;
    public YoutubeLiveBroadcastsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveBroadcast liveBroadcast;
    public YoutubeLiveBroadcastsInsertResponse withLiveBroadcast(openapisdk.models.shared.LiveBroadcast liveBroadcast) {
        this.liveBroadcast = liveBroadcast;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}