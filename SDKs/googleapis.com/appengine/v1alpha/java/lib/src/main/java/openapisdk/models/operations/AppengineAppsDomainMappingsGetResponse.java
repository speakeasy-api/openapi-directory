package openapisdk.models.operations;



public class AppengineAppsDomainMappingsGetResponse {
    public String contentType;
    public AppengineAppsDomainMappingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainMapping domainMapping;
    public AppengineAppsDomainMappingsGetResponse withDomainMapping(openapisdk.models.shared.DomainMapping domainMapping) {
        this.domainMapping = domainMapping;
        return this;
    }
    public Long statusCode;
    public AppengineAppsDomainMappingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}