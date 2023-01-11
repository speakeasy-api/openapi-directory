package openapisdk.models.operations;



public class GetV2CvSimilarVideosResponse {
    public String contentType;
    public GetV2CvSimilarVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV2CvSimilarVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoSearchResults videoSearchResults;
    public GetV2CvSimilarVideosResponse withVideoSearchResults(openapisdk.models.shared.VideoSearchResults videoSearchResults) {
        this.videoSearchResults = videoSearchResults;
        return this;
    }
}