package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}