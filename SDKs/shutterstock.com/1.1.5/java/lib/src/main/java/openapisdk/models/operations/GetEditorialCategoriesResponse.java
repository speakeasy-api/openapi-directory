package openapisdk.models.operations;



public class GetEditorialCategoriesResponse {
    public String contentType;
    public GetEditorialCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialCategoryResults editorialCategoryResults;
    public GetEditorialCategoriesResponse withEditorialCategoryResults(openapisdk.models.shared.EditorialCategoryResults editorialCategoryResults) {
        this.editorialCategoryResults = editorialCategoryResults;
        return this;
    }
    public Long statusCode;
    public GetEditorialCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}