package openapisdk.models.operations;



public class YoutubeLiveBroadcastsListResponse {
    public String contentType;
    public YoutubeLiveBroadcastsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiveBroadcastListResponse liveBroadcastListResponse;
    public YoutubeLiveBroadcastsListResponse withLiveBroadcastListResponse(openapisdk.models.shared.LiveBroadcastListResponse liveBroadcastListResponse) {
        this.liveBroadcastListResponse = liveBroadcastListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}