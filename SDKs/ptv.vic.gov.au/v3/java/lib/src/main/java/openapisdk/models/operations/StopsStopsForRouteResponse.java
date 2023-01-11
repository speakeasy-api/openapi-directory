package openapisdk.models.operations;



public class StopsStopsForRouteResponse {
    public byte[] body;
    public StopsStopsForRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public StopsStopsForRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopsStopsForRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public StopsStopsForRouteResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3StopsOnRouteResponse v3StopsOnRouteResponse;
    public StopsStopsForRouteResponse withV3StopsOnRouteResponse(openapisdk.models.shared.V3StopsOnRouteResponse v3StopsOnRouteResponse) {
        this.v3StopsOnRouteResponse = v3StopsOnRouteResponse;
        return this;
    }
}