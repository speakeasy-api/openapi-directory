package openapisdk.models.operations;



public class RunNamespacesDomainmappingsListResponse {
    public String contentType;
    public RunNamespacesDomainmappingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse;
    public RunNamespacesDomainmappingsListResponse withListDomainMappingsResponse(openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse) {
        this.listDomainMappingsResponse = listDomainMappingsResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesDomainmappingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}