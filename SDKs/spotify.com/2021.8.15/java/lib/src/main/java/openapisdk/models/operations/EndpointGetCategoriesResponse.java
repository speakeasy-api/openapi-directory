package openapisdk.models.operations;



public class EndpointGetCategoriesResponse {
    public openapisdk.models.shared.CategoriesObject categoriesObject;
    public EndpointGetCategoriesResponse withCategoriesObject(openapisdk.models.shared.CategoriesObject categoriesObject) {
        this.categoriesObject = categoriesObject;
        return this;
    }
    public String contentType;
    public EndpointGetCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetCategoriesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}