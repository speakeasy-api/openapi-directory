package openapisdk.models.operations;



public class GetCategoriesResponse {
    public String contentType;
    public GetCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Category[] categories;
    public GetCategoriesResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
}