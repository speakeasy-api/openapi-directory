package openapisdk.models.operations;



public class ListEditorialVideoCategoriesResponse {
    public String contentType;
    public ListEditorialVideoCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialVideoCategoryResults editorialVideoCategoryResults;
    public ListEditorialVideoCategoriesResponse withEditorialVideoCategoryResults(openapisdk.models.shared.EditorialVideoCategoryResults editorialVideoCategoryResults) {
        this.editorialVideoCategoryResults = editorialVideoCategoryResults;
        return this;
    }
    public Long statusCode;
    public ListEditorialVideoCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}