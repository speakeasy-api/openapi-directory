package openapisdk.models.operations;



public class RunNamespacesDomainmappingsCreateResponse {
    public String contentType;
    public RunNamespacesDomainmappingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainMapping domainMapping;
    public RunNamespacesDomainmappingsCreateResponse withDomainMapping(openapisdk.models.shared.DomainMapping domainMapping) {
        this.domainMapping = domainMapping;
        return this;
    }
    public Long statusCode;
    public RunNamespacesDomainmappingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}