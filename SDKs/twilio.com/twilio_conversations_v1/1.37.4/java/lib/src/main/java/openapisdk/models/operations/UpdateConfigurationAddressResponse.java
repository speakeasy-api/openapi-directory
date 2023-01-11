package openapisdk.models.operations;



public class UpdateConfigurationAddressResponse {
    public String contentType;
    public UpdateConfigurationAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConfigurationAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress;
    public UpdateConfigurationAddressResponse withConversationsV1ConfigurationAddress(openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress) {
        this.conversationsV1ConfigurationAddress = conversationsV1ConfigurationAddress;
        return this;
    }
}