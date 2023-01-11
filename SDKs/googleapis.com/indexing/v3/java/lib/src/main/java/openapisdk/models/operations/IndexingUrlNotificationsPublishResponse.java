package openapisdk.models.operations;



public class IndexingUrlNotificationsPublishResponse {
    public String contentType;
    public IndexingUrlNotificationsPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublishUrlNotificationResponse publishUrlNotificationResponse;
    public IndexingUrlNotificationsPublishResponse withPublishUrlNotificationResponse(openapisdk.models.shared.PublishUrlNotificationResponse publishUrlNotificationResponse) {
        this.publishUrlNotificationResponse = publishUrlNotificationResponse;
        return this;
    }
    public Long statusCode;
    public IndexingUrlNotificationsPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}