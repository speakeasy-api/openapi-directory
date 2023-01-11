package openapisdk.models.operations;



public class FetchPlayerStreamerResponse {
    public String contentType;
    public FetchPlayerStreamerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPlayerStreamerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer;
    public FetchPlayerStreamerResponse withMediaV1PlayerStreamer(openapisdk.models.shared.MediaV1PlayerStreamer mediaV1PlayerStreamer) {
        this.mediaV1PlayerStreamer = mediaV1PlayerStreamer;
        return this;
    }
}