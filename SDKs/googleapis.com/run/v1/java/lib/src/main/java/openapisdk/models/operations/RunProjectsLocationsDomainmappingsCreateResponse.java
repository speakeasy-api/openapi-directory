package openapisdk.models.operations;



public class RunProjectsLocationsDomainmappingsCreateResponse {
    public String contentType;
    public RunProjectsLocationsDomainmappingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainMapping domainMapping;
    public RunProjectsLocationsDomainmappingsCreateResponse withDomainMapping(openapisdk.models.shared.DomainMapping domainMapping) {
        this.domainMapping = domainMapping;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsDomainmappingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}