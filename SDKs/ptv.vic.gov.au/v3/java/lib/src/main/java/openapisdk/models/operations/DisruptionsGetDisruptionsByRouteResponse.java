package openapisdk.models.operations;



public class DisruptionsGetDisruptionsByRouteResponse {
    public byte[] body;
    public DisruptionsGetDisruptionsByRouteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DisruptionsGetDisruptionsByRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisruptionsGetDisruptionsByRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse;
    public DisruptionsGetDisruptionsByRouteResponse withV3DisruptionsResponse(openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse) {
        this.v3DisruptionsResponse = v3DisruptionsResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DisruptionsGetDisruptionsByRouteResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}