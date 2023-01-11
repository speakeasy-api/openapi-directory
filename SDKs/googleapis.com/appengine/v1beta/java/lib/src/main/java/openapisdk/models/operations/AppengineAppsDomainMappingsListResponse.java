package openapisdk.models.operations;



public class AppengineAppsDomainMappingsListResponse {
    public String contentType;
    public AppengineAppsDomainMappingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse;
    public AppengineAppsDomainMappingsListResponse withListDomainMappingsResponse(openapisdk.models.shared.ListDomainMappingsResponse listDomainMappingsResponse) {
        this.listDomainMappingsResponse = listDomainMappingsResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsDomainMappingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}