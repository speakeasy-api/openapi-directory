package openapisdk.models.operations;



public class AdsensehostAssociationsessionsStartResponse {
    public openapisdk.models.shared.AssociationSession associationSession;
    public AdsensehostAssociationsessionsStartResponse withAssociationSession(openapisdk.models.shared.AssociationSession associationSession) {
        this.associationSession = associationSession;
        return this;
    }
    public String contentType;
    public AdsensehostAssociationsessionsStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAssociationsessionsStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}