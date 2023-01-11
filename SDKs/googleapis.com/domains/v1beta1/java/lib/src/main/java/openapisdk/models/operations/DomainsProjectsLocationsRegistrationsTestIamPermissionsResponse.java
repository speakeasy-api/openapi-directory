package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}