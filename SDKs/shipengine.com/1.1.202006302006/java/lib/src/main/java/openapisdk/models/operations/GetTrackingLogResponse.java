package openapisdk.models.operations;



public class GetTrackingLogResponse {
    public String contentType;
    public GetTrackingLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackingLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetTrackingLogResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetTrackingLogResponseBody getTrackingLogResponseBody;
    public GetTrackingLogResponse withGetTrackingLogResponseBody(openapisdk.models.shared.GetTrackingLogResponseBody getTrackingLogResponseBody) {
        this.getTrackingLogResponseBody = getTrackingLogResponseBody;
        return this;
    }
}