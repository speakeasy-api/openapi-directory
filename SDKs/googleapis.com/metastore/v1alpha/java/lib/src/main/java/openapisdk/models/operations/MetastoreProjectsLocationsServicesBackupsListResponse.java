package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesBackupsListResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesBackupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBackupsResponse listBackupsResponse;
    public MetastoreProjectsLocationsServicesBackupsListResponse withListBackupsResponse(openapisdk.models.shared.ListBackupsResponse listBackupsResponse) {
        this.listBackupsResponse = listBackupsResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesBackupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}