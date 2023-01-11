package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}