package openapisdk.models.operations;



public class SearchImagesResponse {
    public String contentType;
    public SearchImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageSearchResults imageSearchResults;
    public SearchImagesResponse withImageSearchResults(openapisdk.models.shared.ImageSearchResults imageSearchResults) {
        this.imageSearchResults = imageSearchResults;
        return this;
    }
    public Long statusCode;
    public SearchImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}