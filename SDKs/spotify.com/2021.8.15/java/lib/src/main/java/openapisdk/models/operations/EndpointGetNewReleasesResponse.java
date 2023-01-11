package openapisdk.models.operations;



public class EndpointGetNewReleasesResponse {
    public String contentType;
    public EndpointGetNewReleasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetNewReleasesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.NewReleasesObject newReleasesObject;
    public EndpointGetNewReleasesResponse withNewReleasesObject(openapisdk.models.shared.NewReleasesObject newReleasesObject) {
        this.newReleasesObject = newReleasesObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetNewReleasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}