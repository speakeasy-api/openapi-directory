package openapisdk.models.operations;



public class UpdateDomainConfigResponse {
    public String contentType;
    public UpdateDomainConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDomainConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1DomainConfig messagingV1DomainConfig;
    public UpdateDomainConfigResponse withMessagingV1DomainConfig(openapisdk.models.shared.MessagingV1DomainConfig messagingV1DomainConfig) {
        this.messagingV1DomainConfig = messagingV1DomainConfig;
        return this;
    }
}