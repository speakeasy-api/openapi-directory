package openapisdk.models.operations;



public class PlayByPlayDeltaResponse {
    public String contentType;
    public PlayByPlayDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playByPlays;
    public PlayByPlayDeltaResponse withPlayByPlays(Object[] playByPlays) {
        this.playByPlays = playByPlays;
        return this;
    }
    public Long statusCode;
    public PlayByPlayDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}