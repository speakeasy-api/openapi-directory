package openapisdk.models.operations;



public class CreateConfigurationAddressResponse {
    public String contentType;
    public CreateConfigurationAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConfigurationAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress;
    public CreateConfigurationAddressResponse withConversationsV1ConfigurationAddress(openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress) {
        this.conversationsV1ConfigurationAddress = conversationsV1ConfigurationAddress;
        return this;
    }
}