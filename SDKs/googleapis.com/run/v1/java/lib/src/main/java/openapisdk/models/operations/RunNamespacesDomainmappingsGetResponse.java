package openapisdk.models.operations;



public class RunNamespacesDomainmappingsGetResponse {
    public String contentType;
    public RunNamespacesDomainmappingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainMapping domainMapping;
    public RunNamespacesDomainmappingsGetResponse withDomainMapping(openapisdk.models.shared.DomainMapping domainMapping) {
        this.domainMapping = domainMapping;
        return this;
    }
    public Long statusCode;
    public RunNamespacesDomainmappingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}