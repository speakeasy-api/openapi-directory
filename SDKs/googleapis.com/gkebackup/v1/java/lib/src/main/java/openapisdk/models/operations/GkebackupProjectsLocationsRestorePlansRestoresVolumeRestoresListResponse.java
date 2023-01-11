package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVolumeRestoresResponse listVolumeRestoresResponse;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse withListVolumeRestoresResponse(openapisdk.models.shared.ListVolumeRestoresResponse listVolumeRestoresResponse) {
        this.listVolumeRestoresResponse = listVolumeRestoresResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}