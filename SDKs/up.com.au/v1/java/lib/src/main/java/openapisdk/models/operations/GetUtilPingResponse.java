package openapisdk.models.operations;



public class GetUtilPingResponse {
    public String contentType;
    public GetUtilPingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUtilPingResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.PingResponse pingResponse;
    public GetUtilPingResponse withPingResponse(openapisdk.models.shared.PingResponse pingResponse) {
        this.pingResponse = pingResponse;
        return this;
    }
    public Long statusCode;
    public GetUtilPingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}