package openapisdk.models.operations;



public class GamesMetagameListCategoriesByPlayerResponse {
    public openapisdk.models.shared.CategoryListResponse categoryListResponse;
    public GamesMetagameListCategoriesByPlayerResponse withCategoryListResponse(openapisdk.models.shared.CategoryListResponse categoryListResponse) {
        this.categoryListResponse = categoryListResponse;
        return this;
    }
    public String contentType;
    public GamesMetagameListCategoriesByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesMetagameListCategoriesByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}