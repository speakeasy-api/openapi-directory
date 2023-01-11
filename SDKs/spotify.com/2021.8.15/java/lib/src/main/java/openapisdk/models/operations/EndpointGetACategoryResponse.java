package openapisdk.models.operations;



public class EndpointGetACategoryResponse {
    public openapisdk.models.shared.CategoryObject categoryObject;
    public EndpointGetACategoryResponse withCategoryObject(openapisdk.models.shared.CategoryObject categoryObject) {
        this.categoryObject = categoryObject;
        return this;
    }
    public String contentType;
    public EndpointGetACategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetACategoryResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetACategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}