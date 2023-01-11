package openapisdk.models.operations;



public class GetCmsV3DomainsDomainIdGetByIdResponse {
    public byte[] body;
    public GetCmsV3DomainsDomainIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCmsV3DomainsDomainIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Domain domain;
    public GetCmsV3DomainsDomainIdGetByIdResponse withDomain(openapisdk.models.shared.Domain domain) {
        this.domain = domain;
        return this;
    }
    public Long statusCode;
    public GetCmsV3DomainsDomainIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}