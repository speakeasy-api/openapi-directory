package openapisdk.models.operations;



public class FetchMessagingConfigurationResponse {
    public String contentType;
    public FetchMessagingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessagingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration;
    public FetchMessagingConfigurationResponse withVerifyV2ServiceMessagingConfiguration(openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration verifyV2ServiceMessagingConfiguration) {
        this.verifyV2ServiceMessagingConfiguration = verifyV2ServiceMessagingConfiguration;
        return this;
    }
}