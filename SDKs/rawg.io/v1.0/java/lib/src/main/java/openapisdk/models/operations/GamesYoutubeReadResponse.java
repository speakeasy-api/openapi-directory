package openapisdk.models.operations;



public class GamesYoutubeReadResponse {
    public String contentType;
    public GamesYoutubeReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesYoutubeReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Youtube youtube;
    public GamesYoutubeReadResponse withYoutube(openapisdk.models.shared.Youtube youtube) {
        this.youtube = youtube;
        return this;
    }
}