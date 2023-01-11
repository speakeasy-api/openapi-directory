package openapisdk.models.operations;



public class GamesRedditReadResponse {
    public String contentType;
    public GamesRedditReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Reddit reddit;
    public GamesRedditReadResponse withReddit(openapisdk.models.shared.Reddit reddit) {
        this.reddit = reddit;
        return this;
    }
    public Long statusCode;
    public GamesRedditReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}