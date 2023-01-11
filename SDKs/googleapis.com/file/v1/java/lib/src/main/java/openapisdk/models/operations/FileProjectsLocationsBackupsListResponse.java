package openapisdk.models.operations;



public class FileProjectsLocationsBackupsListResponse {
    public String contentType;
    public FileProjectsLocationsBackupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBackupsResponse listBackupsResponse;
    public FileProjectsLocationsBackupsListResponse withListBackupsResponse(openapisdk.models.shared.ListBackupsResponse listBackupsResponse) {
        this.listBackupsResponse = listBackupsResponse;
        return this;
    }
    public Long statusCode;
    public FileProjectsLocationsBackupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}