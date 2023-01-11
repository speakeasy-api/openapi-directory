package openapisdk.models.operations;



public class GetCategoriesIdResponse {
    public String contentType;
    public GetCategoriesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCategoryResponse getCategoryResponse;
    public GetCategoriesIdResponse withGetCategoryResponse(openapisdk.models.shared.GetCategoryResponse getCategoryResponse) {
        this.getCategoryResponse = getCategoryResponse;
        return this;
    }
    public Long statusCode;
    public GetCategoriesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}