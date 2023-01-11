package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}