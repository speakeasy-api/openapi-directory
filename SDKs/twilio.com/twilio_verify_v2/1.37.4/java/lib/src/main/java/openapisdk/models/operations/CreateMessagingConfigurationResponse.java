package openapisdk.models.operations;



public class CreateMessagingConfigurationResponse {
    public String contentType;
    public CreateMessagingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessagingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration;
    public CreateMessagingConfigurationResponse withVerifyV2ServiceMessagingConfiguration(openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration) {
        this.verifyV2ServiceMessagingConfiguration = verifyV2ServiceMessagingConfiguration;
        return this;
    }
}