package openapisdk.models.operations;



public class AdsensehostAssociationsessionsVerifyResponse {
    public openapisdk.models.shared.AssociationSession associationSession;
    public AdsensehostAssociationsessionsVerifyResponse withAssociationSession(openapisdk.models.shared.AssociationSession associationSession) {
        this.associationSession = associationSession;
        return this;
    }
    public String contentType;
    public AdsensehostAssociationsessionsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAssociationsessionsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}