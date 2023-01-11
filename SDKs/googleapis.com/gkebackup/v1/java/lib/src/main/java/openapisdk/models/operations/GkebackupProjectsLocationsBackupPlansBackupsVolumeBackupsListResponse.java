package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse {
    public String contentType;
    public GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVolumeBackupsResponse listVolumeBackupsResponse;
    public GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse withListVolumeBackupsResponse(openapisdk.models.shared.ListVolumeBackupsResponse listVolumeBackupsResponse) {
        this.listVolumeBackupsResponse = listVolumeBackupsResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}