package openapisdk.models.operations;



public class UpdateDomainCertV4Response {
    public String contentType;
    public UpdateDomainCertV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDomainCertV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1DomainCertV4 messagingV1DomainCertV4;
    public UpdateDomainCertV4Response withMessagingV1DomainCertV4(openapisdk.models.shared.MessagingV1DomainCertV4 messagingV1DomainCertV4) {
        this.messagingV1DomainCertV4 = messagingV1DomainCertV4;
        return this;
    }
}