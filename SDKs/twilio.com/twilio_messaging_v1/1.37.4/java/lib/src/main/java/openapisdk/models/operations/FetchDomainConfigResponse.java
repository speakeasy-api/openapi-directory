package openapisdk.models.operations;



public class FetchDomainConfigResponse {
    public String contentType;
    public FetchDomainConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDomainConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1DomainConfig messagingV1DomainConfig;
    public FetchDomainConfigResponse withMessagingV1DomainConfig(openapisdk.models.shared.MessagingV1DomainConfig messagingV1DomainConfig) {
        this.messagingV1DomainConfig = messagingV1DomainConfig;
        return this;
    }
}