package openapisdk.models.operations;



public class FetchConfigurationResponse {
    public String contentType;
    public FetchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Configuration conversationsV1Configuration;
    public FetchConfigurationResponse withConversationsV1Configuration(openapisdk.models.shared.ConversationsV1Configuration conversationsV1Configuration) {
        this.conversationsV1Configuration = conversationsV1Configuration;
        return this;
    }
}