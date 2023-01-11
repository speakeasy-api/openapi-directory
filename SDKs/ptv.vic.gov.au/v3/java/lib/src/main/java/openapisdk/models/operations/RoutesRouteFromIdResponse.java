package openapisdk.models.operations;



public class RoutesRouteFromIdResponse {
    public byte[] body;
    public RoutesRouteFromIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RoutesRouteFromIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RoutesRouteFromIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public RoutesRouteFromIdResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3RouteResponse v3RouteResponse;
    public RoutesRouteFromIdResponse withV3RouteResponse(openapisdk.models.shared.V3RouteResponse v3RouteResponse) {
        this.v3RouteResponse = v3RouteResponse;
        return this;
    }
}