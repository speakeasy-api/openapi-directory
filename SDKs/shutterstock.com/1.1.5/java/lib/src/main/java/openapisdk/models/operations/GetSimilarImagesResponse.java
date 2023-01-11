package openapisdk.models.operations;



public class GetSimilarImagesResponse {
    public String contentType;
    public GetSimilarImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchResults imageSearchResults;
    public GetSimilarImagesResponse withImageSearchResults(openapisdk.models.shared.ImageSearchResults imageSearchResults) {
        this.imageSearchResults = imageSearchResults;
        return this;
    }
    public Long statusCode;
    public GetSimilarImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}