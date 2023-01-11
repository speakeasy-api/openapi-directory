package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresListResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRestoresResponse listRestoresResponse;
    public GkebackupProjectsLocationsRestorePlansRestoresListResponse withListRestoresResponse(openapisdk.models.shared.ListRestoresResponse listRestoresResponse) {
        this.listRestoresResponse = listRestoresResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}