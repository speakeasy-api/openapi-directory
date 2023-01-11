package openapisdk.models.operations;



public class FetchCallNotificationResponse {
    public String contentType;
    public FetchCallNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallNotificationInstance apiV2010AccountCallCallNotificationInstance;
    public FetchCallNotificationResponse withApiV2010AccountCallCallNotificationInstance(openapisdk.models.shared.ApiV2010AccountCallCallNotificationInstance apiV2010AccountCallCallNotificationInstance) {
        this.apiV2010AccountCallCallNotificationInstance = apiV2010AccountCallCallNotificationInstance;
        return this;
    }
}