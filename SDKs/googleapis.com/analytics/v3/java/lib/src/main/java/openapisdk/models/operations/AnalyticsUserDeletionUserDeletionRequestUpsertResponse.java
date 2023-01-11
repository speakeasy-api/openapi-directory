package openapisdk.models.operations;



public class AnalyticsUserDeletionUserDeletionRequestUpsertResponse {
    public String contentType;
    public AnalyticsUserDeletionUserDeletionRequestUpsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsUserDeletionUserDeletionRequestUpsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDeletionRequest userDeletionRequest;
    public AnalyticsUserDeletionUserDeletionRequestUpsertResponse withUserDeletionRequest(openapisdk.models.shared.UserDeletionRequest userDeletionRequest) {
        this.userDeletionRequest = userDeletionRequest;
        return this;
    }
}