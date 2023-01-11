package openapisdk.models.operations;



public class EndpointSearchResponse {
    public String contentType;
    public EndpointSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSearchResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.SearchResponseObject searchResponseObject;
    public EndpointSearchResponse withSearchResponseObject(openapisdk.models.shared.SearchResponseObject searchResponseObject) {
        this.searchResponseObject = searchResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}