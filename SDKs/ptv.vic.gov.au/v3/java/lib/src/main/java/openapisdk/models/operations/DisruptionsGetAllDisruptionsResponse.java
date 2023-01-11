package openapisdk.models.operations;



public class DisruptionsGetAllDisruptionsResponse {
    public byte[] body;
    public DisruptionsGetAllDisruptionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DisruptionsGetAllDisruptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisruptionsGetAllDisruptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse;
    public DisruptionsGetAllDisruptionsResponse withV3DisruptionsResponse(openapisdk.models.shared.V3DisruptionsResponse v3DisruptionsResponse) {
        this.v3DisruptionsResponse = v3DisruptionsResponse;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public DisruptionsGetAllDisruptionsResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
}