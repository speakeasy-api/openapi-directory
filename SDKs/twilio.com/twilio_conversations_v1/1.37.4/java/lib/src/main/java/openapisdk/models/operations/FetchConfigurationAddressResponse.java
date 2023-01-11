package openapisdk.models.operations;



public class FetchConfigurationAddressResponse {
    public String contentType;
    public FetchConfigurationAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConfigurationAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress;
    public FetchConfigurationAddressResponse withConversationsV1ConfigurationAddress(openapisdk.models.shared.ConversationsV1ConfigurationAddress conversationsV1ConfigurationAddress) {
        this.conversationsV1ConfigurationAddress = conversationsV1ConfigurationAddress;
        return this;
    }
}