package openapisdk.models.operations;



public class GetDomainsResponse {
    public byte[] body;
    public GetDomainsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain[] domains;
    public GetDomainsResponse withDomains(openapisdk.models.shared.Domain[] domains) {
        this.domains = domains;
        return this;
    }
    public Long statusCode;
    public GetDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}