package openapisdk.models.operations;



public class DisruptionsGetDisruptionsByStopResponse {
    public byte[] body;
    public DisruptionsGetDisruptionsByStopResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DisruptionsGetDisruptionsByStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisruptionsGetDisruptionsByStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse;
    public DisruptionsGetDisruptionsByStopResponse withV3DisruptionsResponse(openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse) {
        this.v3DisruptionsResponse = v3DisruptionsResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DisruptionsGetDisruptionsByStopResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}