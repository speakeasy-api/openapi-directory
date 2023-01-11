package openapisdk.models.operations;



public class GetSimilarVideosResponse {
    public String contentType;
    public GetSimilarVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSimilarVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoSearchResults videoSearchResults;
    public GetSimilarVideosResponse withVideoSearchResults(openapisdk.models.shared.VideoSearchResults videoSearchResults) {
        this.videoSearchResults = videoSearchResults;
        return this;
    }
}