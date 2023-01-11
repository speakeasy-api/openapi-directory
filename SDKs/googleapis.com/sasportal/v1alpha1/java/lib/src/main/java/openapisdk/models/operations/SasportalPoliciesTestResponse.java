package openapisdk.models.operations;



public class SasportalPoliciesTestResponse {
    public String contentType;
    public SasportalPoliciesTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalTestPermissionsResponse sasPortalTestPermissionsResponse;
    public SasportalPoliciesTestResponse withSasPortalTestPermissionsResponse(openapisdk.models.shared.SasPortalTestPermissionsResponse sasPortalTestPermissionsResponse) {
        this.sasPortalTestPermissionsResponse = sasPortalTestPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public SasportalPoliciesTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}