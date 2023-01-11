package openapisdk.models.operations;



public class YoutubeLiveBroadcastsBindResponse {
    public String contentType;
    public YoutubeLiveBroadcastsBindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveBroadcast liveBroadcast;
    public YoutubeLiveBroadcastsBindResponse withLiveBroadcast(openapisdk.models.shared.LiveBroadcast liveBroadcast) {
        this.liveBroadcast = liveBroadcast;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsBindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}