package openapisdk.models.operations;



public class FetchPlayerStreamerPlaybackGrantResponse {
    public String contentType;
    public FetchPlayerStreamerPlaybackGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPlayerStreamerPlaybackGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant mediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
    public FetchPlayerStreamerPlaybackGrantResponse withMediaV1PlayerStreamerPlayerStreamerPlaybackGrant(openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant mediaV1PlayerStreamerPlayerStreamerPlaybackGrant) {
        this.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = mediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
        return this;
    }
}