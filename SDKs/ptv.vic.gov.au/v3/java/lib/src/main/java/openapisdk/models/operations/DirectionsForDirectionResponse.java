package openapisdk.models.operations;



public class DirectionsForDirectionResponse {
    public byte[] body;
    public DirectionsForDirectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DirectionsForDirectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DirectionsForDirectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DirectionsResponse v3DirectionsResponse;
    public DirectionsForDirectionResponse withV3DirectionsResponse(openapisdk.models.shared.V3DirectionsResponse v3DirectionsResponse) {
        this.v3DirectionsResponse = v3DirectionsResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DirectionsForDirectionResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}