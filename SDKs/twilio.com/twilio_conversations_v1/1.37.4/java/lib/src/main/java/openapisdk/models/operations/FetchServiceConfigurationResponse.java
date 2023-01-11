package openapisdk.models.operations;



public class FetchServiceConfigurationResponse {
    public String contentType;
    public FetchServiceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration conversationsV1ServiceServiceConfiguration;
    public FetchServiceConfigurationResponse withConversationsV1ServiceServiceConfiguration(openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration conversationsV1ServiceServiceConfiguration) {
        this.conversationsV1ServiceServiceConfiguration = conversationsV1ServiceServiceConfiguration;
        return this;
    }
}