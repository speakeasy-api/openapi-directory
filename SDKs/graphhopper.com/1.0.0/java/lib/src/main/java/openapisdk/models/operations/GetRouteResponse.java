package openapisdk.models.operations;



public class GetRouteResponse {
    public String contentType;
    public GetRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public GetRouteResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRouteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.RouteResponse routeResponse;
    public GetRouteResponse withRouteResponse(openapisdk.models.shared.RouteResponse routeResponse) {
        this.routeResponse = routeResponse;
        return this;
    }
    public Long statusCode;
    public GetRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}