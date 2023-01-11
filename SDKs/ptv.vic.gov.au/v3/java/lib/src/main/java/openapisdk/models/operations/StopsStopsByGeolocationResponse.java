package openapisdk.models.operations;



public class StopsStopsByGeolocationResponse {
    public byte[] body;
    public StopsStopsByGeolocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public StopsStopsByGeolocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopsStopsByGeolocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public StopsStopsByGeolocationResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3StopsByDistanceResponse v3StopsByDistanceResponse;
    public StopsStopsByGeolocationResponse withV3StopsByDistanceResponse(openapisdk.models.shared.V3StopsByDistanceResponse v3StopsByDistanceResponse) {
        this.v3StopsByDistanceResponse = v3StopsByDistanceResponse;
        return this;
    }
}