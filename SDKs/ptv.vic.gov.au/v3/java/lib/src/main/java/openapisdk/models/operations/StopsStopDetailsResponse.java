package openapisdk.models.operations;



public class StopsStopDetailsResponse {
    public byte[] body;
    public StopsStopDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public StopsStopDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopsStopDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public StopsStopDetailsResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3StopResponse v3StopResponse;
    public StopsStopDetailsResponse withV3StopResponse(openapisdk.models.shared.V3StopResponse v3StopResponse) {
        this.v3StopResponse = v3StopResponse;
        return this;
    }
}