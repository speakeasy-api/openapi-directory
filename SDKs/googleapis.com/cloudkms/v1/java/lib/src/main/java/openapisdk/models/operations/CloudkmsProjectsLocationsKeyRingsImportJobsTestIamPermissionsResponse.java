package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}