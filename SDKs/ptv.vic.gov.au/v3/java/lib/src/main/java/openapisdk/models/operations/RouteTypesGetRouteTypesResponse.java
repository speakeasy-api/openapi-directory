package openapisdk.models.operations;



public class RouteTypesGetRouteTypesResponse {
    public byte[] body;
    public RouteTypesGetRouteTypesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RouteTypesGetRouteTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RouteTypesGetRouteTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public RouteTypesGetRouteTypesResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3RouteTypesResponse v3RouteTypesResponse;
    public RouteTypesGetRouteTypesResponse withV3RouteTypesResponse(openapisdk.models.shared.V3RouteTypesResponse v3RouteTypesResponse) {
        this.v3RouteTypesResponse = v3RouteTypesResponse;
        return this;
    }
}