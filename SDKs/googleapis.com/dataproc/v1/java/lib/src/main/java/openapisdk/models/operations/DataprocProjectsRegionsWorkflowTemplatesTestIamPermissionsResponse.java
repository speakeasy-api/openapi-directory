package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}