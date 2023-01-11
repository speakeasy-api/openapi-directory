package openapisdk.models.operations;



public class EndpointGetAShowResponse {
    public String contentType;
    public EndpointGetAShowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAShowResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.ShowObject showObject;
    public EndpointGetAShowResponse withShowObject(openapisdk.models.shared.ShowObject showObject) {
        this.showObject = showObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAShowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}