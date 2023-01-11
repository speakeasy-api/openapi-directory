package openapisdk.models.operations;



public class UpdateServiceNotificationResponse {
    public String contentType;
    public UpdateServiceNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification conversationsV1ServiceServiceConfigurationServiceNotification;
    public UpdateServiceNotificationResponse withConversationsV1ServiceServiceConfigurationServiceNotification(openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification conversationsV1ServiceServiceConfigurationServiceNotification) {
        this.conversationsV1ServiceServiceConfigurationServiceNotification = conversationsV1ServiceServiceConfigurationServiceNotification;
        return this;
    }
}