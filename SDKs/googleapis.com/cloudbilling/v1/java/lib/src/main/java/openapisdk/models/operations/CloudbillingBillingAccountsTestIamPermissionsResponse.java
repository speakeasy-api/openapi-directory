package openapisdk.models.operations;



public class CloudbillingBillingAccountsTestIamPermissionsResponse {
    public String contentType;
    public CloudbillingBillingAccountsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsTestIamPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse;
    public CloudbillingBillingAccountsTestIamPermissionsResponse withTestIamPermissionsResponse(openapisdk.models.shared.TestIamPermissionsResponse testIamPermissionsResponse) {
        this.testIamPermissionsResponse = testIamPermissionsResponse;
        return this;
    }
}