package openapisdk.models.operations;



public class GamesTwitchReadResponse {
    public String contentType;
    public GamesTwitchReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesTwitchReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Twitch twitch;
    public GamesTwitchReadResponse withTwitch(openapisdk.models.shared.Twitch twitch) {
        this.twitch = twitch;
        return this;
    }
}