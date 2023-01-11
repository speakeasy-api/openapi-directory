package openapisdk.models.operations;



public class SearchVideosResponse {
    public String contentType;
    public SearchVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoSearchResults videoSearchResults;
    public SearchVideosResponse withVideoSearchResults(openapisdk.models.shared.VideoSearchResults videoSearchResults) {
        this.videoSearchResults = videoSearchResults;
        return this;
    }
}