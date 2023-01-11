package openapisdk.models.operations;



public class CategoriesGetResponse {
    public java.util.Map<String, Object> categoriesGetResponse;
    public CategoriesGetResponse withCategoriesGetResponse(java.util.Map<String, Object> categoriesGetResponse) {
        this.categoriesGetResponse = categoriesGetResponse;
        return this;
    }
    public String contentType;
    public CategoriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CategoriesGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CategoriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}