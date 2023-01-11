package openapisdk.models.operations;



public class RunProjectsLocationsDomainmappingsListResponse {
    public String contentType;
    public RunProjectsLocationsDomainmappingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse;
    public RunProjectsLocationsDomainmappingsListResponse withListDomainMappingsResponse(openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse) {
        this.listDomainMappingsResponse = listDomainMappingsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsDomainmappingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}