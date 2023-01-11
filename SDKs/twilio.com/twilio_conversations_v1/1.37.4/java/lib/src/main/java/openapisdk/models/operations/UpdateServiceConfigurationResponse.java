package openapisdk.models.operations;



public class UpdateServiceConfigurationResponse {
    public String contentType;
    public UpdateServiceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration conversationsV1ServiceServiceConfiguration;
    public UpdateServiceConfigurationResponse withConversationsV1ServiceServiceConfiguration(openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration conversationsV1ServiceServiceConfiguration) {
        this.conversationsV1ServiceServiceConfiguration = conversationsV1ServiceServiceConfiguration;
        return this;
    }
}