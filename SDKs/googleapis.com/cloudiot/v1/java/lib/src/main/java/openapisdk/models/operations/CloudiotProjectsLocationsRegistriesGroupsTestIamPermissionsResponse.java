package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}