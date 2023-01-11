package openapisdk.models.operations;



public class CreatePlayerStreamerResponse {
    public String contentType;
    public CreatePlayerStreamerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePlayerStreamerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer;
    public CreatePlayerStreamerResponse withMediaV1PlayerStreamer(openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer) {
        this.mediaV1PlayerStreamer = mediaV1PlayerStreamer;
        return this;
    }
}