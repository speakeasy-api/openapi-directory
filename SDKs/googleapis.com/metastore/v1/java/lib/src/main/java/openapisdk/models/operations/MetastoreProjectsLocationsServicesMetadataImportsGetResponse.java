package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesMetadataImportsGetResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesMetadataImportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MetadataImport metadataImport;
    public MetastoreProjectsLocationsServicesMetadataImportsGetResponse withMetadataImport(openapisdk.models.shared.MetadataImport metadataImport) {
        this.metadataImport = metadataImport;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesMetadataImportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}