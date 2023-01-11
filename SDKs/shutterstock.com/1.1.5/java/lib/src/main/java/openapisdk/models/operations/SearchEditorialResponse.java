package openapisdk.models.operations;



public class SearchEditorialResponse {
    public String contentType;
    public SearchEditorialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialSearchResults editorialSearchResults;
    public SearchEditorialResponse withEditorialSearchResults(openapisdk.models.shared.EditorialSearchResults editorialSearchResults) {
        this.editorialSearchResults = editorialSearchResults;
        return this;
    }
    public Long statusCode;
    public SearchEditorialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}