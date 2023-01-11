package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}