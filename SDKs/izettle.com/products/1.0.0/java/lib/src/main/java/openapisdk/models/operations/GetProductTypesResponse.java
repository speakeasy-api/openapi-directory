package openapisdk.models.operations;



public class GetProductTypesResponse {
    public openapisdk.models.shared.CategoryResponse categoryResponse;
    public GetProductTypesResponse withCategoryResponse(openapisdk.models.shared.CategoryResponse categoryResponse) {
        this.categoryResponse = categoryResponse;
        return this;
    }
    public String contentType;
    public GetProductTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProductTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}