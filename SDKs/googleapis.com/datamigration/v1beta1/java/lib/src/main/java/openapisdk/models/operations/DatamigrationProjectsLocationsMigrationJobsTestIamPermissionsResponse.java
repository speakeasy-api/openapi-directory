package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}