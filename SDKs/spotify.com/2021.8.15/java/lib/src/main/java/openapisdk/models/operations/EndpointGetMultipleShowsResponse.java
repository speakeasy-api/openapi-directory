package openapisdk.models.operations;



public class EndpointGetMultipleShowsResponse {
    public String contentType;
    public EndpointGetMultipleShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetMultipleShowsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.ShowsObject showsObject;
    public EndpointGetMultipleShowsResponse withShowsObject(openapisdk.models.shared.ShowsObject showsObject) {
        this.showsObject = showsObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetMultipleShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}