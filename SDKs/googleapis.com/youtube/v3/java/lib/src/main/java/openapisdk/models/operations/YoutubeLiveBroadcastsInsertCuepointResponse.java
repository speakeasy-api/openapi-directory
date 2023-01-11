package openapisdk.models.operations;



public class YoutubeLiveBroadcastsInsertCuepointResponse {
    public String contentType;
    public YoutubeLiveBroadcastsInsertCuepointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Cuepoint cuepoint;
    public YoutubeLiveBroadcastsInsertCuepointResponse withCuepoint(openapisdk.models.shared.Cuepoint cuepoint) {
        this.cuepoint = cuepoint;
        return this;
    }
    public Long statusCode;
    public YoutubeLiveBroadcastsInsertCuepointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}