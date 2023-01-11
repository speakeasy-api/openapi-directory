package openapisdk.models.operations;



public class UpdateConfigurationResponse {
    public String contentType;
    public UpdateConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Configuration conversationsV1Configuration;
    public UpdateConfigurationResponse withConversationsV1Configuration(openapisdk.models.shared.ConversationsV1Configuration conversationsV1Configuration) {
        this.conversationsV1Configuration = conversationsV1Configuration;
        return this;
    }
}