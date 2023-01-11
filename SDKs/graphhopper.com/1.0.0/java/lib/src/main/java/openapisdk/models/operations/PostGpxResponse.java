package openapisdk.models.operations;



public class PostGpxResponse {
    public String contentType;
    public PostGpxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public PostGpxResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostGpxResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.RouteResponse routeResponse;
    public PostGpxResponse withRouteResponse(openapisdk.models.shared.RouteResponse routeResponse) {
        this.routeResponse = routeResponse;
        return this;
    }
    public Long statusCode;
    public PostGpxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}