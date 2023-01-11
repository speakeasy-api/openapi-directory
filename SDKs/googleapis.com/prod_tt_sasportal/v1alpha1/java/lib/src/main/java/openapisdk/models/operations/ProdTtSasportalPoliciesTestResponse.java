package openapisdk.models.operations;



public class ProdTtSasportalPoliciesTestResponse {
    public String contentType;
    public ProdTtSasportalPoliciesTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalTestPermissionsResponse sasPortalTestPermissionsResponse;
    public ProdTtSasportalPoliciesTestResponse withSasPortalTestPermissionsResponse(openapisdk.models.shared.SasPortalTestPermissionsResponse sasPortalTestPermissionsResponse) {
        this.sasPortalTestPermissionsResponse = sasPortalTestPermissionsResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalPoliciesTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}