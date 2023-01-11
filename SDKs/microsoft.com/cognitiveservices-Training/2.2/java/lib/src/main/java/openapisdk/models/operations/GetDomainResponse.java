package openapisdk.models.operations;



public class GetDomainResponse {
    public byte[] body;
    public GetDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain domain;
    public GetDomainResponse withDomain(openapisdk.models.shared.Domain domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public GetDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}