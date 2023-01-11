package openapisdk.models.operations;



public class UpdatePlayerStreamerResponse {
    public String contentType;
    public UpdatePlayerStreamerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePlayerStreamerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer;
    public UpdatePlayerStreamerResponse withMediaV1PlayerStreamer(openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer) {
        this.mediaV1PlayerStreamer = mediaV1PlayerStreamer;
        return this;
    }
}