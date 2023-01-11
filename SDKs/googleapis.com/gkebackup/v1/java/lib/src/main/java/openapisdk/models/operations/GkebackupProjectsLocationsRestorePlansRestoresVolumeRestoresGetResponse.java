package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VolumeRestore volumeRestore;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse withVolumeRestore(openapisdk.models.shared.VolumeRestore volumeRestore) {
        this.volumeRestore = volumeRestore;
        return this;
    }
}