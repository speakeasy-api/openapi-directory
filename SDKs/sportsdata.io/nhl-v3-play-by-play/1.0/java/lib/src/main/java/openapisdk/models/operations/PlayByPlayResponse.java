package openapisdk.models.operations;



public class PlayByPlayResponse {
    public String contentType;
    public PlayByPlayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playByPlay;
    public PlayByPlayResponse withPlayByPlay(Object playByPlay) {
        this.playByPlay = playByPlay;
        return this;
    }
    public Long statusCode;
    public PlayByPlayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}