package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesMetadataImportsListResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesMetadataImportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMetadataImportsResponse listMetadataImportsResponse;
    public MetastoreProjectsLocationsServicesMetadataImportsListResponse withListMetadataImportsResponse(openapisdk.models.shared.ListMetadataImportsResponse listMetadataImportsResponse) {
        this.listMetadataImportsResponse = listMetadataImportsResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesMetadataImportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}