package openapisdk.models.operations;



public class GetV2CvSimilarImagesResponse {
    public String contentType;
    public GetV2CvSimilarImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchResults imageSearchResults;
    public GetV2CvSimilarImagesResponse withImageSearchResults(openapisdk.models.shared.ImageSearchResults imageSearchResults) {
        this.imageSearchResults = imageSearchResults;
        return this;
    }
    public Long statusCode;
    public GetV2CvSimilarImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}