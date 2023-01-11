package openapisdk.models.operations;



public class ProdTtSasportalPoliciesSetResponse {
    public String contentType;
    public ProdTtSasportalPoliciesSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalPolicy sasPortalPolicy;
    public ProdTtSasportalPoliciesSetResponse withSasPortalPolicy(openapisdk.models.shared.SasPortalPolicy sasPortalPolicy) {
        this.sasPortalPolicy = sasPortalPolicy;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalPoliciesSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}