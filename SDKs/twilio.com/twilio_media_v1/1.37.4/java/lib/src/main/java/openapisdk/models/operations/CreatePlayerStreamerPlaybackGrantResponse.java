package openapisdk.models.operations;



public class CreatePlayerStreamerPlaybackGrantResponse {
    public String contentType;
    public CreatePlayerStreamerPlaybackGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePlayerStreamerPlaybackGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant mediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
    public CreatePlayerStreamerPlaybackGrantResponse withMediaV1PlayerStreamerPlayerStreamerPlaybackGrant(openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant mediaV1PlayerStreamerPlayerStreamerPlaybackGrant) {
        this.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = mediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
        return this;
    }
}