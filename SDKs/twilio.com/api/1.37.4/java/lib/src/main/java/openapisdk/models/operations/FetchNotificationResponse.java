package openapisdk.models.operations;



public class FetchNotificationResponse {
    public String contentType;
    public FetchNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountNotificationInstance apiV2010AccountNotificationInstance;
    public FetchNotificationResponse withApiV2010AccountNotificationInstance(openapisdk.models.shared.ApiV2010AccountNotificationInstance apiV2010AccountNotificationInstance) {
        this.apiV2010AccountNotificationInstance = apiV2010AccountNotificationInstance;
        return this;
    }
}