package openapisdk.models.operations;



public class ListEditorialImageCategoriesResponse {
    public String contentType;
    public ListEditorialImageCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialImageCategoryResults editorialImageCategoryResults;
    public ListEditorialImageCategoriesResponse withEditorialImageCategoryResults(openapisdk.models.shared.EditorialImageCategoryResults editorialImageCategoryResults) {
        this.editorialImageCategoryResults = editorialImageCategoryResults;
        return this;
    }
    public Long statusCode;
    public ListEditorialImageCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}