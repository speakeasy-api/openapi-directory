package openapisdk.models.operations;



public class SearchEditorialVideosResponse {
    public String contentType;
    public SearchEditorialVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialVideoSearchResults editorialVideoSearchResults;
    public SearchEditorialVideosResponse withEditorialVideoSearchResults(openapisdk.models.shared.EditorialVideoSearchResults editorialVideoSearchResults) {
        this.editorialVideoSearchResults = editorialVideoSearchResults;
        return this;
    }
    public Long statusCode;
    public SearchEditorialVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}