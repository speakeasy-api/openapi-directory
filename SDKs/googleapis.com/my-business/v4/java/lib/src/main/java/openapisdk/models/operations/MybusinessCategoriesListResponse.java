package openapisdk.models.operations;



public class MybusinessCategoriesListResponse {
    public String contentType;
    public MybusinessCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBusinessCategoriesResponse listBusinessCategoriesResponse;
    public MybusinessCategoriesListResponse withListBusinessCategoriesResponse(openapisdk.models.shared.ListBusinessCategoriesResponse listBusinessCategoriesResponse) {
        this.listBusinessCategoriesResponse = listBusinessCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}