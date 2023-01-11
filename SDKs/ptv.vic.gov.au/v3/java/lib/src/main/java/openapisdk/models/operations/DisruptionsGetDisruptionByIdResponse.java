package openapisdk.models.operations;



public class DisruptionsGetDisruptionByIdResponse {
    public byte[] body;
    public DisruptionsGetDisruptionByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DisruptionsGetDisruptionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisruptionsGetDisruptionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DisruptionResponse v3DisruptionResponse;
    public DisruptionsGetDisruptionByIdResponse withV3DisruptionResponse(openapisdk.models.shared.V3DisruptionResponse v3DisruptionResponse) {
        this.v3DisruptionResponse = v3DisruptionResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DisruptionsGetDisruptionByIdResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}