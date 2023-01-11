package openapisdk.models.operations;



public class DisruptionsGetDisruptionModesResponse {
    public byte[] body;
    public DisruptionsGetDisruptionModesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DisruptionsGetDisruptionModesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisruptionsGetDisruptionModesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DisruptionModesResponse v3DisruptionModesResponse;
    public DisruptionsGetDisruptionModesResponse withV3DisruptionModesResponse(openapisdk.models.shared.V3DisruptionModesResponse v3DisruptionModesResponse) {
        this.v3DisruptionModesResponse = v3DisruptionModesResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DisruptionsGetDisruptionModesResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}