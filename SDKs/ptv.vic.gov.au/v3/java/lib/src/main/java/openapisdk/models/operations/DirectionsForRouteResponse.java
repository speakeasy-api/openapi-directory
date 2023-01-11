package openapisdk.models.operations;



public class DirectionsForRouteResponse {
    public byte[] body;
    public DirectionsForRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DirectionsForRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DirectionsForRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DirectionsResponse v3DirectionsResponse;
    public DirectionsForRouteResponse withV3DirectionsResponse(openapisdk.models.shared.V3DirectionsResponse v3DirectionsResponse) {
        this.v3DirectionsResponse = v3DirectionsResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DirectionsForRouteResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}