package openapisdk.models.operations;



public class PostRouteResponse {
    public String contentType;
    public PostRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public PostRouteResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRouteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.RouteResponse routeResponse;
    public PostRouteResponse withRouteResponse(openapisdk.models.shared.RouteResponse routeResponse) {
        this.routeResponse = routeResponse;
        return this;
    }
    public Long statusCode;
    public PostRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}