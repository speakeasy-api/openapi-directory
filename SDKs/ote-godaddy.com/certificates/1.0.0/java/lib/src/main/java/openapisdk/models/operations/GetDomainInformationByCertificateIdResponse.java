package openapisdk.models.operations;



public class GetDomainInformationByCertificateIdResponse {
    public byte[] body;
    public GetDomainInformationByCertificateIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomainInformationByCertificateIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] domainVerificationSummaries;
    public GetDomainInformationByCertificateIdResponse withDomainVerificationSummaries(Object[] domainVerificationSummaries) {
        this.domainVerificationSummaries = domainVerificationSummaries;
        return this;
    }
    public Long statusCode;
    public GetDomainInformationByCertificateIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}