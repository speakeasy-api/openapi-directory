package openapisdk.models.operations;



public class FetchServiceNotificationResponse {
    public String contentType;
    public FetchServiceNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification conversationsV1ServiceServiceConfigurationServiceNotification;
    public FetchServiceNotificationResponse withConversationsV1ServiceServiceConfigurationServiceNotification(openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification conversationsV1ServiceServiceConfigurationServiceNotification) {
        this.conversationsV1ServiceServiceConfigurationServiceNotification = conversationsV1ServiceServiceConfigurationServiceNotification;
        return this;
    }
}