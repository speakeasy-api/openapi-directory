package openapisdk.models.operations;



public class GetTrackingLogFromLabelResponse {
    public String contentType;
    public GetTrackingLogFromLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackingLogFromLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetTrackingLogFromLabelResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetTrackingLogFromLabelResponseBody getTrackingLogFromLabelResponseBody;
    public GetTrackingLogFromLabelResponse withGetTrackingLogFromLabelResponseBody(openapisdk.models.shared.GetTrackingLogFromLabelResponseBody getTrackingLogFromLabelResponseBody) {
        this.getTrackingLogFromLabelResponseBody = getTrackingLogFromLabelResponseBody;
        return this;
    }
}