package openapisdk.models.operations;



public class SearchEditorialImagesResponse {
    public String contentType;
    public SearchEditorialImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialSearchResults editorialSearchResults;
    public SearchEditorialImagesResponse withEditorialSearchResults(openapisdk.models.shared.EditorialSearchResults editorialSearchResults) {
        this.editorialSearchResults = editorialSearchResults;
        return this;
    }
    public Long statusCode;
    public SearchEditorialImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}