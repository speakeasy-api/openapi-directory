package openapisdk.models.operations;



public class GetDomainDetailsByDomainResponse {
    public byte[] body;
    public GetDomainDetailsByDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomainDetailsByDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainVerificationDetail domainVerificationDetail;
    public GetDomainDetailsByDomainResponse withDomainVerificationDetail(openapisdk.models.shared.DomainVerificationDetail domainVerificationDetail) {
        this.domainVerificationDetail = domainVerificationDetail;
        return this;
    }
    public Long statusCode;
    public GetDomainDetailsByDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}