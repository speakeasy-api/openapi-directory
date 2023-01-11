package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse {
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}