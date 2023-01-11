package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansListResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRestorePlansResponse listRestorePlansResponse;
    public GkebackupProjectsLocationsRestorePlansListResponse withListRestorePlansResponse(openapisdk.models.shared.ListRestorePlansResponse listRestorePlansResponse) {
        this.listRestorePlansResponse = listRestorePlansResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}