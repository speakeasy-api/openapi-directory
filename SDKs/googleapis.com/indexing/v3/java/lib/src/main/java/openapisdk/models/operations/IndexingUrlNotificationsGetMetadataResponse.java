package openapisdk.models.operations;



public class IndexingUrlNotificationsGetMetadataResponse {
    public String contentType;
    public IndexingUrlNotificationsGetMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IndexingUrlNotificationsGetMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UrlNotificationMetadata urlNotificationMetadata;
    public IndexingUrlNotificationsGetMetadataResponse withUrlNotificationMetadata(openapisdk.models.shared.UrlNotificationMetadata urlNotificationMetadata) {
        this.urlNotificationMetadata = urlNotificationMetadata;
        return this;
    }
}