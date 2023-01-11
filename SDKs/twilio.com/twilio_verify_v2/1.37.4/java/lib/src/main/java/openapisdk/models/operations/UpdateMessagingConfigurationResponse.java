package openapisdk.models.operations;



public class UpdateMessagingConfigurationResponse {
    public String contentType;
    public UpdateMessagingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMessagingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration;
    public UpdateMessagingConfigurationResponse withVerifyV2ServiceMessagingConfiguration(openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration) {
        this.verifyV2ServiceMessagingConfiguration = verifyV2ServiceMessagingConfiguration;
        return this;
    }
}